import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "../data.service";
import {Subscription} from "rxjs";

interface HeaderElement {
  id: number;
  naziv: string;
  url?: string;
}

// interface HeaderAll {
//   nav1: any;
//   nav2: any;
//   nav3: any;
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  data: any;
  nav1: HeaderElement[] = [];
  nav2: HeaderElement[] = [];
  nav3: HeaderElement[] = [];
  httpSubscription = new Subscription();

  constructor(private http: DataService) {
  }

  ngOnInit(): void {
    this.httpSubscription = this.http.getData("header").subscribe((res) => {
        this.data = res;
        this.nav1 = this.data.nav1;
        this.nav2 = this.data.nav2;
        this.nav3 = this.data.nav3;
    }, (err) => {
      console.log("header data error: " + err);
    });
  }

  ngOnDestroy(): void {
      this.httpSubscription.unsubscribe();
  }

}
