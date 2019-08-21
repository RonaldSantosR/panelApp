import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { OwlModule, OwlCarousel } from '../../../node_modules/ngx-owl-carousel';
import { OwlChild } from '../../../node_modules/ngx-owl-carousel/src/owl-child.component';



@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    OwlModule
  ]
})
export class PanelModule { }
