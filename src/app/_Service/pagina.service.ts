import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings';
import { Subject, Observable } from 'rxjs';
import { Pagina } from '../_Model/Pagina';
import { RequesterService } from './requester.service';
import { TituloServiceService } from './titulo-service.service';
import { ItemService } from './item.service';
import { Titulo } from '../_Model/titulo';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  REQUEST_URL = AppSettings.API_ENDPOINT + AppSettings.PAGINA_URL;

  public paginaChanged = new Subject<Pagina>();
  private pagina: Pagina;
  titulos : Titulo[] = [];
  titulo : Titulo;

  constructor(private requester: RequesterService, private tituloService: TituloServiceService, private item: ItemService) {
     this.listarPaginaPrincipal().subscribe(
      pagina => {
        this.pagina = pagina;
        this.paginaChanged.next(this.pagina);
      }
    ); 
}

   getPagina(): Pagina{
     return this.pagina;
   }

   listarPaginaPrincipal(): Observable<any>{
     return this.requester.get<any>(this.REQUEST_URL, {});
   }

   getTitulo(): Titulo[]{
     return this.titulos;
   }

   llenarPaginaPrincipal(){
     this.listarPaginaPrincipal().subscribe(
      (data:any) =>{
        Object.keys(data).forEach(key1 =>{
          if(parseInt(key1) === 1){
            var obj1 = data[key1];
            this.datatitulo(obj1);
            //this.tituloService.listarTitulos(obj1);
          } else if(parseInt(key1)===2){
            //
          }else if (parseInt(key1)===3){
            //
          }
        });
      }

     );
   }

   datatitulo(data){
    Object.keys(data).forEach(key1 =>{
      this.titulo.id=data[key1];
      this.titulo.texto=data[key1];
      this.titulo.colorAlto=data[key1];
      this.titulo.colorMedio=data[key1];
      this.titulo.colorBajo=data[key1];
      this.titulo.opacidad=data[key1];
      this.titulos.push(this.titulo);
    })

  }


}
