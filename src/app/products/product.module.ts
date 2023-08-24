import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ConvertToSpacePipe} from "../shared/convert-to-space.pipe";
import {RouterModule} from "@angular/router";
import {ProductGuard} from "./product.guard";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[ProductGuard],component:ProductDetailComponent},
    ])
  ]
})
export class ProductModule { }
