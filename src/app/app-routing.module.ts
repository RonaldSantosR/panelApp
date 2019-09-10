import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { MantenimientopanelComponent } from './mantenimientopanel/mantenimientopanel.component';

const appRoutes: Routes = [
  {
      path: 'sistemas',
      component: PanelComponent
  },
  {
    path:'mantenimiento',
    component: MantenimientopanelComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
