import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { OwlModule, OwlCarousel } from '../../../node_modules/ngx-owl-carousel';
import { OwlChild } from '../../../node_modules/ngx-owl-carousel/src/owl-child.component';
import { LocalStorageModule } from 'angular-2-local-storage';



@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    OwlModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ]
})
export class PanelModule { }
