import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {ProductGuard} from "./products/product.guard";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
