import {Component, OnDestroy, OnInit, ElementRef, HostBinding, Renderer2, AfterViewInit} from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from "rxjs";
import {Location} from "@angular/common";
import {Router, NavigationEnd} from "@angular/router";

interface FooterElement {
  id: number;
  naziv: string;
  url?: string;
  elementi?: string[];
}

interface FooterData {
  foot1: FooterElement[];
  foot2: FooterElement[];
  foot3: FooterElement[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    '../../../node_modules/slick-carousel/slick/slick.scss',
    '../../../node_modules/slick-carousel/slick/slick-theme.scss'
  ],
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy{
  data: FooterData = {foot1: [], foot2: [], foot3: []};
  routeCheckSub : Subscription = new Subscription();

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

  constructor(private http: DataService, private elementRef: ElementRef,
              private renderer: Renderer2, private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.httpSub = this.http.getData<FooterData>("footer").subscribe((res ) => {
      this.data = res;
    }, (err) => {
      console.log("footer get data greska: " + err);
    });
  }


  ngOnDestroy(): void {
    this.httpSub.unsubscribe();
    this.routeCheckSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.routeCheckSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hostElement = this.elementRef.nativeElement;
        if (this.router.url === '/404') {
          this.renderer.setStyle(hostElement, 'position', 'absolute');
        } else {
          this.renderer.setStyle(hostElement, 'position', 'static');
        }
      }
    });
  }



}
