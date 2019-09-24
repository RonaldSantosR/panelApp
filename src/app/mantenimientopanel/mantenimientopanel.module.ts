import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientopanelComponent } from './mantenimientopanel.component';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [MantenimientopanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ]
})
export class MantenimientopanelModule { }
