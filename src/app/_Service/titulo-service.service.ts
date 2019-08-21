import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings';
import { Titulo } from '../_Model/titulo';
import { Subject, Observable } from '../../../node_modules/rxjs';
import { RequesterService } from './requester.service';

@Injectable()
export class TituloServiceService {
  REQUEST_URL = AppSettings.API_ENDPOINT + AppSettings.TITULO_URL;

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

}
