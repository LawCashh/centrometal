import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ListedProizvod, Testera, Artikl } from "./home.model";
import { HomeDataService } from "./home-data.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [HomeDataService]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit{
  akcijaProizvodi: ListedProizvod[] = [];
  novoProizvodi: ListedProizvod[] = [];
  preporucujemoProizvodi: ListedProizvod[] = [];
  rasprodajaProizvodi: ListedProizvod[] = [];
  vruciProizvodi: ListedProizvod[] = [];
  mainListLeft: any = [];
  mainListLeftIcons: {id: number, url: string}[] = [];
  reklameMain: {id: number, url?: string, artikli?: Artikl[]}[] = [];
  testere: Testera[] = [];
  counter: number = 1;
  interval = interval(3000);
  intervalSub = new Subscription();
  selectedTestera: string = "";
  @ViewChild('radio1', {static: false}) radio1Ref: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('radio2', {static: false}) radio2Ref: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('radio3', {static: false}) radio3Ref: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('radio4', {static: false}) radio4Ref: ElementRef<HTMLInputElement> | undefined;
  vruciMoreThanFour = false; akcijaMoreThanFour = false;
  novoMoreThanFour = false; preporucujemoMoreThanFour = false;
  rasprodajaMoreThanFour = false;
  aktiviranoVruci = false; aktiviranoAkcija = false; aktiviranoNovo = false;
  aktiviranoPreporucujemo = false; aktiviranoRasprodaja = false;
  isLoadingProducts: boolean[] = [true,true,true,true,true];

  constructor(private homeDataService: HomeDataService) {
  }


  ngOnInit(): void {
    this.homeDataService.getAkcijaProizvodiData().subscribe({ next: (res) => {
        this.akcijaProizvodi = res;
      if (this.akcijaProizvodi.length > 4) this.akcijaMoreThanFour = true;
      this.isLoadingProducts[0]=false;
    }, error: (err) => {
      console.log("akcijaerror " + err);
      this.isLoadingProducts[0]=false;
    }});
    this.homeDataService.getNovoProizvodiData().subscribe({ next: (res) => {
      this.novoProizvodi = res;
      if (this.novoProizvodi.length > 4) this.novoMoreThanFour = true;
      this.isLoadingProducts[1]=false;
    }, error: (err) => {
      console.log("novoerror " + err);
      this.isLoadingProducts[1]=false;
    }});
    this.homeDataService.getPreporucujemoProizvodiData().subscribe({next: (res) => {
      this.preporucujemoProizvodi = res;
      if (this.preporucujemoProizvodi.length > 4) this.preporucujemoMoreThanFour = true;
      this.isLoadingProducts[2]=false;
    }, error: (err) => {
      console.log("preporucujemoerror " + err);
      this.isLoadingProducts[2]=false;
    }});
    this.homeDataService.getRasprodajaProizvodiData().subscribe({next: (res) => {
      this.rasprodajaProizvodi = res;
      if (this.rasprodajaProizvodi.length > 4) this.rasprodajaMoreThanFour = true;
      this.isLoadingProducts[3]=false;
    }, error: (err) => {
      console.log("rasprodajaerror " + err);
      this.isLoadingProducts[3]=false;
    }});
    this.homeDataService.getVruciProizvodiData().subscribe({ next: (res) => {
      this.vruciProizvodi = res;
      if (this.vruciProizvodi.length > 4) this.vruciMoreThanFour = true;
      this.isLoadingProducts[4]=false;
    }, error: (err) => {
      console.log("vrucierror " + err);
      this.isLoadingProducts[4]=false;
    }});
    this.homeDataService.getMainListLeftData().subscribe({ next: res => {
      this.mainListLeft = res;
    }, error: err => {
      console.log("mainlistlefterror " + err);
    }});
    this.homeDataService.getMainListLeftIconsData().subscribe({ next: res => {
      this.mainListLeftIcons = res;
    }, error: err => {
      console.log("mainlistlefticonserror " + err);
    }});
    this.homeDataService.getReklameMainData().subscribe({ next: res => {
      this.reklameMain = res;
    }, error: err => {
      console.log("reklamemainerror " + err);
    }});
    this.homeDataService.getTestereData().subscribe({ next: res => {
      this.testere = res;
    }, error: err => {
      console.log("testereerror " + err);
    }});
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.resetTimer();
  }

  resetTimer() {
    this.intervalSub.unsubscribe();
    this.intervalSub = this.interval.subscribe({ next: () => {
      if(this.counter === 4 && this.radio1Ref) this.radio1Ref.nativeElement.checked = true;
      else if(this.counter === 1 && this.radio2Ref) this.radio2Ref.nativeElement.checked = true;
      else if(this.counter === 2 && this.radio3Ref) this.radio3Ref.nativeElement.checked = true;
      else if (this.radio4Ref) this.radio4Ref.nativeElement.checked = true;
      this.counter++;
      if (this.counter > 4){
        this.counter = 1;
      }
    }, error: error => {
      console.log("interval error " + error)
    }})
  }
}
