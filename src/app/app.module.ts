import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { RecursiveListComponent } from './home/recursive-list/recursive-list.component';
import {FormsModule} from "@angular/forms";
import { AppRoutesModule } from './app-routes.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    RecursiveListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    AppRoutesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
