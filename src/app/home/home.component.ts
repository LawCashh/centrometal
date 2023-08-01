import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ListedProizvod, Proizvod, Testera, Artikl } from "./proizvodi.model";
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

  constructor(private homeDataService: HomeDataService) {
  }


  ngOnInit(): void {
    this.homeDataService.getAkcijaProizvodiData().subscribe((res) => {
        this.akcijaProizvodi = res;
      if (this.akcijaProizvodi.length > 4) this.akcijaMoreThanFour = true;
    }, (err) => {
      console.log("akcijaerror " + err);
    });
    this.homeDataService.getNovoProizvodiData().subscribe((res) => {
      this.novoProizvodi = res;
      if (this.novoProizvodi.length > 4) this.novoMoreThanFour = true;
    }, (err) => {
      console.log("novoerror " + err);
    });
    this.homeDataService.getPreporucujemoProizvodiData().subscribe((res) => {
      this.preporucujemoProizvodi = res;
      if (this.preporucujemoProizvodi.length > 4) this.preporucujemoMoreThanFour = true;
    }, (err) => {
      console.log("preporucujemoerror " + err);
    });
    this.homeDataService.getRasprodajaProizvodiData().subscribe((res) => {
      this.rasprodajaProizvodi = res;
      if (this.rasprodajaProizvodi.length > 4) this.rasprodajaMoreThanFour = true;
    }, (err) => {
      console.log("rasprodajaerror " + err);
    });
    this.homeDataService.getVruciProizvodiData().subscribe((res) => {
      this.vruciProizvodi = res;
      if (this.vruciProizvodi.length > 4) this.vruciMoreThanFour = true;
    }, (err) => {
      console.log("vrucierror " + err);
    });
    this.homeDataService.getMainListLeftData().subscribe(res => {
      this.mainListLeft = res;
    }, err => {
      console.log("mainlistlefterror " + err);
    });
    this.homeDataService.getMainListLeftIconsData().subscribe(res => {
      this.mainListLeftIcons = res;
    }, err => {
      console.log("mainlistlefticonserror " + err);
    });
    this.homeDataService.getReklameMainData().subscribe(res => {
      this.reklameMain = res;
    }, err => {
      console.log("reklamemainerror " + err);
    });
    this.homeDataService.getTestereData().subscribe(res => {
      this.testere = res;
    }, err => {
      console.log("testereerror " + err);
    });
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.resetTimer();
  }

  resetTimer() {
    this.intervalSub.unsubscribe();
    this.intervalSub = this.interval.subscribe(() => {
      if(this.counter === 4 && this.radio1Ref) this.radio1Ref.nativeElement.checked = true;
      else if(this.counter === 1 && this.radio2Ref) this.radio2Ref.nativeElement.checked = true;
      else if(this.counter === 2 && this.radio3Ref) this.radio3Ref.nativeElement.checked = true;
      else if (this.radio4Ref) this.radio4Ref.nativeElement.checked = true;
      this.counter++;
      if (this.counter > 4){
        this.counter = 1;
      }
    }, error => {
      console.log("interval error " + error)
    })
  }
}
