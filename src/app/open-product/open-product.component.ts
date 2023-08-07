import {Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {Proizvod} from "./proizvod.model";
import {Observable} from "rxjs";
import {ListedProizvod} from "../home/home.model";

interface Video {
  id: number;
  url: string;
  imgurl: string;
}

@Component({
  selector: 'app-open-product',
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss',
    '../../../node_modules/slick-carousel/slick/slick.scss',
    '../../../node_modules/slick-carousel/slick/slick-theme.scss']
})
export class OpenProductComponent implements OnInit {
  id: string = "";
  proizvod : Proizvod = {
    id: 0, naziv: "", sifra1: "", sifra2: "", cijena: "",
    url: "", slideurls: [], opis: [], opis2left: [], opis2right: []
  };
  opProizvodi: ListedProizvod[] = [];
  opMoreThanFour = false; aktiviranoOP = false;
  videos : Video[] = [];
  @ViewChild('video1Ref', {static: false}) video1Ref : ElementRef<HTMLVideoElement> | undefined;
  @ViewChild('video2Ref', {static: false}) video2Ref : ElementRef<HTMLVideoElement> | undefined;
  @ViewChild('leftp1', {static: false}) leftp1Ref : ElementRef<HTMLParagraphElement> | undefined;
  @ViewChild('leftp2', {static: false}) leftp2Ref : ElementRef<HTMLParagraphElement> | undefined;
  @ViewChild('lefth1', {static: false}) lefth1Ref : ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('lefth2', {static: false}) lefth2Ref : ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('lefth3', {static: false}) lefth3Ref : ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('lefth4', {static: false}) lefth4Ref : ElementRef<HTMLButtonElement> | undefined;
  ids: string[] = ["1", "2", "3", "4"];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "infinite": true,
    "arrows": true,
    "prevArrow": '.prevop',
    "nextArrow": '.nextop',
  };

  constructor(private route: ActivatedRoute, private http: DataService,
              private elementRef: ElementRef, private renderer: Renderer2,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") as string;
    if (!this.ids.includes(this.id)) this.router.navigate(["/404"]);
    console.log("id otvorene stranice je " + this.id);
    this.http.getData<Proizvod[]>(this.id).subscribe({ next: (res) => {
      this.proizvod = res[0];
      console.log(this.proizvod);
    }, error: (error) => {
      console.log("getproizvoddata error " + error);
    }});
    this.getOPProizvodiData().subscribe({next: (res) => {
      this.opProizvodi = res;
      if (this.opProizvodi.length > 4) this.opMoreThanFour = true;
    }, error: (error) => {
      console.log("opproizvodi error " + error);
    }});
    this.getVideosData().subscribe({
      next: res => {
        this.videos = res;
      }, error: err => {
        console.log("get videos greska " + err);
      }
    });
  }
  getOPProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("openproductproizvodi");
  }
  getVideosData(): Observable<Video[]> {
    return this.http.getData<Video[]>("videos");
  }
  leftsideButtonContentChange(number: number){
    if (number == 1) {
      this.resetLeftButtonColor();
      this.renderer.setStyle(this.lefth1Ref?.nativeElement, 'backgroundColor', '#00adef');
    } else if (number == 2){
      this.resetLeftButtonColor();
      this.renderer.setStyle(this.lefth2Ref?.nativeElement, 'backgroundColor', '#00adef');
    } else if (number == 3){
      this.resetLeftButtonColor();
      this.renderer.setStyle(this.lefth3Ref?.nativeElement, 'backgroundColor', '#00adef');
    }
    else {
      this.resetLeftButtonColor();
      this.renderer.setStyle(this.lefth4Ref?.nativeElement, 'backgroundColor', '#00adef');
    }
    this.renderer.setProperty(this.leftp1Ref?.nativeElement, "innerHTML",
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number);
    this.renderer.setProperty(this.leftp2Ref?.nativeElement, "innerHTML",
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number + "<br>" +
      "Lorem ipsum Lorem ipsum " + number);
  }

  resetLeftButtonColor() {
    this.renderer.setStyle(this.lefth1Ref?.nativeElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.lefth2Ref?.nativeElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.lefth3Ref?.nativeElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.lefth4Ref?.nativeElement, 'backgroundColor', '#333');
  }
  showHideImg(event: Event) {
    let imgRef = event.currentTarget as HTMLImageElement;
    imgRef.hidden = !imgRef.hidden;
    if(imgRef.id === "playpause1_img") {
      if(this.video1Ref !== undefined){
        this.video1Ref.nativeElement.play();
      }
    }else if(imgRef.id === "playpause2_img"){
      if(this.video2Ref !== undefined)
      this.video2Ref?.nativeElement.play();
    }
  }
}
