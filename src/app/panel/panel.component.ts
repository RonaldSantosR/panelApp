import { Component, OnInit } from '@angular/core';
import { titulo } from '../_Service/titulo.service';
import { Titulo } from '../_Model/titulo';
import { TituloServiceService } from '../_Service/titulo-service.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
      public tituloService : TituloServiceService
  ) { 
  }
  titulos : Titulo[];
  titulo1 : any;
  titulo2 : any;


  ngOnInit() {
    this.listartitulos();
  }

  listartitulos(){
    this.tituloService.listarTitulos().subscribe(      
    titulos=>{
        this.titulos=titulos;
        titulos.forEach(
          titulo=>{
            if(titulo.id==1){
              this.Asignarcolortitulo1(titulo);
              this.titulo1=titulo.texto;
            }else{
              this.Asignarcolortitulo2(titulo);
              this.titulo2=titulo.texto;
            }
          }
        )

    })
    this.asignartextotitulo();
  }

  asignartextotitulo()
  {
      (document.getElementById("texto1")).textContent = this.titulo1;
      (document.getElementById("texto2")).textContent = this.titulo2;

  };


  Asignarcolortitulo1(primertitulo : Titulo) {
    var element = document.getElementById("1");
    element.style.cssText=
    `
    font-size: 50px;  
    background: -webkit-linear-gradient(left top, ` + primertitulo.colorAlto + ` , ` + primertitulo.colorMedio + `,  ` + primertitulo.colorBajo + `,` + primertitulo.opacidad + `);
    background: linear-gradient(to bottom right,  ` + primertitulo.colorAlto + ` , ` + primertitulo.colorMedio + `,  ` + primertitulo.colorBajo + `,` + primertitulo.opacidad + `);
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent; 
    margin: 0px;
    line-height:1;
    `;
  }
  Asignarcolortitulo2(segundotitulo : Titulo) {
    var element = document.getElementById("2");
    element.style.cssText=
    `
    font-size: 82px;  
    margin: 0px;
    background: -webkit-linear-gradient(left top,  ` + segundotitulo.colorAlto + ` , ` + segundotitulo.colorMedio + `,  ` + segundotitulo.colorBajo + `,` + segundotitulo.opacidad + `);
    background: linear-gradient(to bottom right, ` + segundotitulo.colorAlto + ` , ` + segundotitulo.colorMedio + `,  ` + segundotitulo.colorBajo + `,` + segundotitulo.opacidad + `);
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent;  
    line-height:1;
    `;
  }

}
