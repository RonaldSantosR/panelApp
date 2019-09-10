import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { TituloServiceService } from './_Service/titulo-service.service';
import { RequesterService } from './_Service/requester.service';
import { ItemService } from './_Service/item.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { BrowserStorageService } from './_Service/browserstorage.service';
import { AuthInterceptor } from './_Service/auth-interceptor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from '../../node_modules/ngx-owl-carousel';
import { MantenimientopanelModule } from './mantenimientopanel/mantenimientopanel.module';
import { UiSwitchModule } from 'ngx-toggle-switch';




@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MantenimientopanelModule,
    OwlModule,
    UiSwitchModule
  ],
  providers: [TituloServiceService,
              RequesterService,
              ItemService,
              BrowserStorageService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
              },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
