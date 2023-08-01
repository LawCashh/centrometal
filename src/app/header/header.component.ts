import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "../data.service";
import {Subscription} from "rxjs";

interface HeaderElement {
  id: number;
  naziv: string;
  url?: string;
}

interface HeaderAll {
  nav1: HeaderElement[];
  nav2: HeaderElement[];
  nav3: HeaderElement[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  data: HeaderAll = {nav1: [], nav2: [], nav3: []};
  httpSubscription = new Subscription();

  constructor(private http: DataService) {
  }

  ngOnInit(): void {
    this.httpSubscription = this.http.getData<HeaderAll>("header").subscribe((res) => {
        this.data = res;
    }, (err) => {
      console.log("header data error: " + err);
    });
  }

  ngOnDestroy(): void {
      this.httpSubscription.unsubscribe();
  }

}
