import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingStarComponent} from "./rating-star/rating-star.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [RatingStarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    RatingStarComponent
  ]
})
export class SharedModule { }
