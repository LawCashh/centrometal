import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickCarouselModule} from "ngx-slick-carousel";

import { OpenProductRoutingModule } from './open-product-routing.module';
import {OpenProductComponent} from "./open-product.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    OpenProductComponent
  ],
  imports: [
    CommonModule,
    OpenProductRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class OpenProductModule { }
