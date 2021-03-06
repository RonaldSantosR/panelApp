import { Component, OnInit } from '@angular/core';
import { titulo } from '../_Service/titulo.service';
import { Titulo } from '../_Model/titulo';
import { TituloServiceService } from '../_Service/titulo-service.service';
import { PaginaService } from '../_Service/pagina.service';
import { Item } from '../_Model/Item';
import { DomSanitizer, SafeResourceUrl } from '../../../node_modules/@angular/platform-browser';
import { Footer } from '../_Model/Footer';
import { Pagina } from '../_Model/Pagina';
import * as $ from '../../../node_modules/jquery/dist/jQuery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',

  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  

  constructor(
      public tituloService : TituloServiceService,
      public paginaService : PaginaService,
      public sanitization : DomSanitizer,
      private router : Router
  ) { 
  }
  titulos : Titulo[] =[];
  titulo1 : any;
  titulo2 : any;
  imagenesordenas: any=[];
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  data4: any[] = [];
  titulo : Titulo;
  item : Item;
  items : Item[] =[];
  imagenes : Item[] = [];
  user_photo: SafeResourceUrl;
  foot : Footer = new Footer();
  pag : Pagina = new Pagina();
  mantenimiento: boolean;
  
    ngOnInit() {
    this.llenarPaginaPrincipal()

/*     this.ordenarimagenes(); */
}


  llenarPaginaPrincipal(){
    this.paginaService.listarPaginaPrincipal().subscribe(
     (data:any) =>{
       Object.keys(data).forEach(key1 =>{
         if(parseInt(key1) === 1){
          var obj1 = data[key1];
          this.datatitulo(obj1);
          this.listartitulos();
           //this.tituloService.listarTitulos(obj1);
         } else if(parseInt(key1)===3){
          var obj2 = data[key1];
          this.datapagina(obj2);
          this.listaritems();
         }else if (parseInt(key1)===4){
           var obj3 = data[key1];
           this.datafooter(obj3);
           this.listarfooter();
         }else if(parseInt(key1)===2){
          var obj4 = data[key1];
          this.datapag(obj4);
          this.listarpag(this.pag);
         }
         else if(parseInt(key1)===2){
          var obj4 = data[key1];
          this.datapag(obj4);
          this.listarpag(this.pag);
         }else if(parseInt(key1)===5){
          var obj4 = data[key1];
          if(obj4=="MANTENIMIENTO"){
            this.mantenimiento=true;
          }else{
            this.mantenimiento=false
          }
         }
       });
     }

    );

  }

  datapag(data){
    Object.keys(data).forEach(key1 =>{
    var obj1 = data[key1];
    this.pag.id = obj1['id'];
    this.pag.color = obj1['color'];
    this.pag.footer= obj1['footer'];
    this.pag.descripcioncolor=obj1['descripcioncolor'];
    })
  }

  

  


  datapagina(data){
    Object.keys(data).forEach(key1 =>{
      var obj1 = data[key1];
      console.log(this.titulo)
      let ite = Object.assign({}, this.item);
      ite.id = parseInt(obj1['id']);
      ite.nombre = obj1['nombre'];
      ite.descripcion = obj1['descripcion'];
      ite.ruta_imagen = this.sanitization.bypassSecurityTrustUrl(
        'data:image/png;base64,' + obj1['ruta_imagen']);
      ite.orden = parseInt(obj1['orden']);
      ite.link_ruta = obj1['link_ruta'];
      ite.tipoItem = obj1['tipoItem'];
      ite.video = obj1['video'];
      this.items.push(ite);
    })    
  }

  datatitulo(data){
    Object.keys(data).forEach(key1 =>{
      var obj1 = data[key1];
      console.log(this.titulo)
      let titul = Object.assign({}, this.titulo);
      titul.id = parseInt(obj1['id']);
      titul.texto = obj1['texto'];
      titul.colorAlto = obj1['colorAlto'];
      titul.colorMedio = obj1['colorMedio'];
      titul.opacidad = obj1['opacidad'];
      titul.colorBajo = obj1['colorBajo'];
      this.titulos.push(titul)
    })
  }

  datafooter(data){    
      Object.keys(data).forEach(key1 =>{
        var obj1 = data[key1];
      let foote = Object.assign({}, this.foot);
      foote.id = obj1['id'];
      foote.color = obj1['color'];
      foote.descripcion = obj1['descripcion'];
      foote.colorDescripcion = obj1['colorDescripcion'];
      foote.logo = this.sanitization.bypassSecurityTrustUrl(
        'data:image/png;base64,' + obj1['logo']);
      this.foot.id=foote.id;
      this.foot.color=foote.color;
      this.foot.descripcion=foote.descripcion;
      this.foot.colorDescripcion=foote.colorDescripcion;
      this.foot.logo=foote.logo
      })
    
  }
listaritems(){
      this.items.forEach(
        item=>{
          this.imagenes.push(item);
        }
      )

      this.imagenes.sort(function(a, b) {
        return a.orden - b.orden;
      });

      setTimeout(()=>{
        this.descripcioncss(this.pag);
      }, 500);

      
  }


descripcioncss(pagina : Pagina){
/*   var element = document.getElementById('wave0');
  element.style.cssText =
  `
  color: `+pagina.descripcioncolor+`;
  `;  */
 var y = document.getElementsByTagName("p");
 var i;
 for (i = 0; i < this.imagenes.length; i++) {
  y[i].style.color = pagina.descripcioncolor;
 }  

}



listartitulos(){
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
    )} 

listarfooter(){
      this.asignarestilofooter(this.foot);
      (document.getElementById("descripcionfooter")).textContent = this.foot.descripcion;
      this.asignardescripcionfooter(this.foot);
    }

listarpag(pagina : Pagina){
  var element = document.getElementById("colorFondo");
  element.style.cssText =  `
  background-color : `+pagina.color+` ;
  `;
} 

onEditar(){
  this.router.navigate(['./mantenimiento']);
}

    
asignardescripcionfooter(footerPagina : Footer){
    var element = document.getElementById("descripcionfooter");
    element.style.cssText =
    `
    color: `+footerPagina.colorDescripcion+`;
    `; 
  } 
  
asignarestilofooter(footerPagina : Footer){
  var element = document.getElementById("footer")
  element.style.cssText = 
  `
    background: `+footerPagina.color+`;
    
    
    `;
}  

 Asignarcolortitulo1(primertitulo : Titulo) {
    var element = document.getElementById("texto1");
    element.style.cssText=
    `
     
    background: -webkit-linear-gradient(left top, ` + primertitulo.colorAlto + ` , ` + primertitulo.colorMedio + `,  ` + primertitulo.colorBajo + `,` + primertitulo.opacidad + `);
    background: linear-gradient(to bottom right,  ` + primertitulo.colorAlto + ` , ` + primertitulo.colorMedio + `,  ` + primertitulo.colorBajo + `,` + primertitulo.opacidad + `);
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent; 
    margin: 0px;
    line-height:1;
    display: block;
    text-align: center;
    `;
  }
  Asignarcolortitulo2(segundotitulo : Titulo) {
    var element = document.getElementById("texto2");
    element.style.cssText=
    `
      
    margin: 0px;
    background: -webkit-linear-gradient(left top,  ` + segundotitulo.colorAlto + ` , ` + segundotitulo.colorMedio + `,  ` + segundotitulo.colorBajo + `,` + segundotitulo.opacidad + `);
    background: linear-gradient(to bottom right, ` + segundotitulo.colorAlto + ` , ` + segundotitulo.colorMedio + `,  ` + segundotitulo.colorBajo + `,` + segundotitulo.opacidad + `);
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent;  
    line-height:1;
    display: block;
    text-align: center;
    `;
  }

  carouselOptions = {
    margin: 100,
    nav: false,
    //navText: ["<img src='./assets/images/img.png'> ","<img src='./assets/images/img.png'>"],
    //navText: ["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"],
    navText: ["<div class='nav-btn prev-slide'><i class='fa fa-angle-left'   style=' font-size:50px'   ></i></div>", "<div class='nav-btn next-slide'><i class='fa fa-angle-right' style=' font-size:50px'  ></i></div>"],
    //navText: ["hola", "chau"],
    responsiveClass: true,
    callbacks:true,
      responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
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
  
}
