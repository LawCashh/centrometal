import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {OpenProductComponent} from "./open-product/open-product.component";
import {Error404Component} from "./error404/error404.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'open-product/:id', component: OpenProductComponent},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: "404"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
