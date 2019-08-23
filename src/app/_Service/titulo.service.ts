import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings';
import { RequesterService } from './requester.service';
import { Subject, Observable } from 'rxjs';
import { Titulo } from '../_Model/titulo';

@Injectable()
export class titulo {

  REQUEST_URL = AppSettings.API_ENDPOINT + AppSettings.TITULO_URL;
  REQUEST_URL2=AppSettings.API_ENDPOINT+"/pagina";
  public titulosChanged = new Subject<Titulo[]>();
  private titulos : Titulo[];

  constructor(private requester: RequesterService) { 
    this.listarTitulos().subscribe( 
        titulos => {
          this.titulos = titulos;
          this.titulosChanged.next(this.titulos);
      }
    )
  }

  getTitulos(): Titulo[]{
    return this.titulos;
  }

  listarTitulos() : Observable<Titulo[]> {
    return this.requester.get<Titulo[]>(this.REQUEST_URL,{});
  }

  getControlCargosDocumentosDenuncias(): any {
    return this.requester.get<any>(this.REQUEST_URL2, {});
  }

}
