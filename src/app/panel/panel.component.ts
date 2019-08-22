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
    this.asignartextotitulo();
  }

  listartitulos(){
    this.tituloService.listarTitulos().subscribe(      
    titulos=>{
        this.titulos=titulos;
        titulos.forEach(
          titulo=>{
            if(titulo.id==1){
              this.titulo1=titulo.texto;
              (document.getElementById("texto1")).textContent = this.titulo1;
              this.Asignarcolortitulo1(titulo);
            }else{
              this.titulo2=titulo.texto;
              (document.getElementById("texto2")).textContent = this.titulo2;
              this.Asignarcolortitulo2(titulo);
            }
          }
        )
    }
  )
  }

  asignartextotitulo()
  {
      (document.getElementById("texto1")).textContent = this.titulo1;
      (document.getElementById("texto2")).textContent = this.titulo2;

  };


  Asignarcolortitulo1(primertitulo : Titulo) {
    var element = document.getElementById("texto1");
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
    var element = document.getElementById("texto2");
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

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]

}
