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
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModificarItemComponent } from './mantenimientopanel/modificar-item/modificar-item.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { UtilsServiceService } from './_Service/utils-service.service';





@NgModule({
  declarations: [
    AppComponent,
    ModificarItemComponent,
    ConfirmModalComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MantenimientopanelModule,
    ModalModule.forRoot(),
    OwlModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    ModificarItemComponent,
    ConfirmModalComponent
  ],

  providers: [TituloServiceService,
              RequesterService,
              ItemService,
              BrowserStorageService,
              BsModalRef,
              BsModalService,
              UtilsServiceService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
              },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
