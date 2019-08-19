import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const appRoutes: Routes = [
  {
      path: 'sistemas',
      component: PanelComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
