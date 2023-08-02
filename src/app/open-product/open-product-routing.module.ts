import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpenProductComponent} from "./open-product.component";

const opRoutes : Routes = [
  {path: '', component: OpenProductComponent}
  // {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forChild(opRoutes)],
  exports: [RouterModule]
})
export class OpenProductRoutingModule { }
