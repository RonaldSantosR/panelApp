import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlCarousel } from '../../../node_modules/ngx-owl-carousel';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OwlCarousel
  ],
  exports: [
    OwlCarousel
  ]
})

export class ServiceModule { }

