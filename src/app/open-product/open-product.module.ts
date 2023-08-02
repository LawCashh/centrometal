import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {ChunkPipe} from "../chunk.pipe";

import { OpenProductRoutingModule } from './open-product-routing.module';
import {OpenProductComponent} from "./open-product.component";


@NgModule({
  declarations: [
    OpenProductComponent,
    ChunkPipe
  ],
  imports: [
    CommonModule,
    OpenProductRoutingModule,
    SlickCarouselModule
  ]
})
export class OpenProductModule { }
