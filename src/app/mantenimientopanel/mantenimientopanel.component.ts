import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../_Service/app.settings';
import { ItemService } from '../_Service/item.service';
import { Item } from '../_Model/Item';
import { asTextData } from '../../../node_modules/@angular/core/src/view';
import { sanitizeIdentifier } from '../../../node_modules/@angular/compiler';
import { TipoItem } from '../_Model/TipoItem';
import { DomSanitizer , SafeResourceUrl} from '../../../node_modules/@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AgregarItemComponent } from './agregar-item/agregar-item.component';
import { ModificarItemComponent } from './modificar-item/modificar-item.component';


@Component({
  selector: 'app-mantenimientopanel',
  templateUrl: './mantenimientopanel.component.html',
  styleUrls: ['./mantenimientopanel.component.css']
})
export class MantenimientopanelComponent implements OnInit {

  constructor(
    public itemService : ItemService,
    public sanitization : DomSanitizer,
    private modalService: BsModalService,

  ) { }

  item: Item= new Item();
  items: Item[] = [];
  items2: Item[] = [];
  isDisabled: boolean = false;


  ngOnInit() {
    this.listaritems();
  }



  listaritems() {
    this.items = [];
    this.itemService.listarItems().subscribe(
      item => {
        item.forEach(
          item => {
            this.items.push({
              id: item.id,
              nombre: item.nombre,
              descripcion: item.descripcion,
              ruta_imagen: this.sanitization.bypassSecurityTrustUrl(
                'data:image/png;base64,' + item.ruta_imagen),
              orden: item.orden,
              link_ruta: item.link_ruta,
              tipoItem: item.tipoItem,
              activo: item.activo,
              video: item.video
            })
          }
        )
      }
    )
  }


  modificarProducto(row) {
    this.item = this.items.find(item => item.id == row)
    let bsModalRef: BsModalRef = this.modalService.show(ModificarItemComponent , {
      initialState: {
        item: this.item,
        titulo: 'Modificar el item'
      },
      class: 'modal-md',
      keyboard: false,
      backdrop: "static"
    });
     bsModalRef.content.ambitoModificadoEvent.subscribe(() =>
      this.listaritems()
    ) 

  }


  onAgregar() {
    this.agregarItemSistema();
  }

  agregarItemSistema() {
    let bsModalRef: BsModalRef = this.modalService.show(AgregarItemComponent, {
      initialState: {
        titulo: 'Agregar sistema'
      },
      class: 'modal-md',
      keyboard: false,
      backdrop: "static"
    });

    bsModalRef.content.itemCreadoEvent.subscribe(() =>
      this.listaritems()
    )
  }


  onChangeActivo(item : Item){
    let sds = item.activo;
    this.itemService.desactivarItem(item).subscribe(
      item=>{
        
      }
    )
  }

}

