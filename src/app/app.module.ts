import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { TituloServiceService } from './_Service/titulo-service.service';
import { RequesterService } from './_Service/requester.service';
import { ItemService } from './_Service/item.service';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    HttpClientModule
  ],
  providers: [TituloServiceService,
              RequesterService,
              ItemService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
