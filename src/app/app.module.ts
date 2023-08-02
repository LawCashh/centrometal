import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OpenProductComponent } from './open-product/open-product.component';
import { Error404Component } from './error404/error404.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { RecursiveListComponent } from './home/recursive-list/recursive-list.component';
import {FormsModule} from "@angular/forms";
import { ChunkPipe } from './chunk.pipe';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OpenProductComponent,
    Error404Component,
    RecursiveListComponent,
    ChunkPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
