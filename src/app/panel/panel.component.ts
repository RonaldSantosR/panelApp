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
  imagenesordenas: any=[];
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];

  images = [
    {
      text: "Lorem Ipsum ispe and scrambled it to make a type specimen book.",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg",
      ruta: "http://www.exact.com.pe/",
      orden: 5
    },
    {
      text: "Lorem Ipsum is simply en the industry's standard dummy text ever since the 1500s, when an unknown. ",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg",
      ruta: "https://negocio.pe/servicio-empresas/exact-sac",
      orden: 6
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg",
      ruta: "http://www.exact.com.pe/",
      orden: 4
    },
    {
      text: "Lorem n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg",
      ruta: "https://negocio.pe/servicio-empresas/exact-sac",
      orden: 3
    },
    {
      text: "text ever to make a type specimen book. It has suralso the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg",
      ruta: "https://negocio.pe/servicio-empresas/exact-sac",
      orden: 2
    },
    {
      text: "Lorem Ipsum is simply dummy text ofc typesetting, remaining essentially unchanged.",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg",
      ruta: "http://www.exact.com.pe/",
      orden: 1
    }
  ]

  ngOnInit() {
    //this.listartitulos();
    //this.listarpagina();
    this.listartituloss();
    this.asignartextotitulo();
    this.ordenarimagenes();
  }


  listarpagina(){
    this.tituloService.getpagina().subscribe(
      data=>{
        Object.keys(data).forEach(key => {
          var obj = data[key];
          if(parseInt(key)==1){
            this.data1=obj;
          }
          if(parseInt(key)==2){
            this.data2=obj;
            this.listartitulos(this.data2);
          }
          if(parseInt(key)==3){
            this.data3=obj;
          }          
          if(parseInt(key)==4){
            this.data4=obj;
          }
        });
      }
    )

  }

  listartituloss(){
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

  listartitulos(data){
    this.titulos==data;
    this.titulos.forEach(
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


/*     this.tituloService.listarTitulos().subscribe(      
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
  ) */
/*   Object.keys(data).forEach(key => {
    if(parseInt(key)==1){
      var index1 = data[key];
      this.titulo1=titulo.texto;
      (document.getElementById("texto1")).textContent = this.titulo1;
      this.Asignarcolortitulo1(titulo);
    }else{
      var index2 = data[key];
      this.titulo2=titulo.texto;
      (document.getElementById("texto2")).textContent = this.titulo2;
      this.Asignarcolortitulo2(titulo);
    }
  }) */

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
    mouseDrag:true,
    callbacks:true,
    animateOut:true,
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
 


  ordenarimagenes(){
    this.images.sort(function(a, b) {
      return a.orden - b.orden;
    });
  }



  
}
