import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientopanelComponent } from './mantenimientopanel.component';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MantenimientopanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MantenimientopanelModule { }
