import {Component, OnDestroy, OnInit, ElementRef} from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from "rxjs";

interface FooterElement {
  id: number;
  naziv: string;
  url?: string;
  elementi?: string[];
}

// interface FooterData {
//   foot1: FooterElement[];
//   foot2: FooterElement[];
//   foot3: FooterElement[];
// }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    '../../../node_modules/slick-carousel/slick/slick.scss',
    '../../../node_modules/slick-carousel/slick/slick-theme.scss'
  ],
})
export class FooterComponent implements OnInit, OnDestroy{
  data: any;
  foot1: FooterElement[] = [];
  foot2: FooterElement[] = [];
  foot3: FooterElement[] = [];

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "infinite": true,
    "arrows": false,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": false,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": false,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };

  httpSub : Subscription = new Subscription();

  constructor(private http: DataService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.httpSub = this.http.getData("footer").subscribe((res ) => {
      this.data = res;
      this.foot1 = this.data.foot1;
      this.foot2 = this.data.foot2;
      this.foot3 = this.data.foot3;
    }, (err) => {
      console.log("footer get data greska: " + err);
    });
  }

  ngOnDestroy(): void {
    this.httpSub.unsubscribe();
  }



}
