import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { UtilsServiceService } from '../../_Service/utils-service.service';
import { Item } from '../../_Model/Item';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ItemService } from '../../_Service/item.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-modificar-item',
  templateUrl: './modificar-item.component.html',
  styleUrls: ['./modificar-item.component.css']
})
export class ModificarItemComponent implements OnInit {

  constructor(
    private utilsService: UtilsServiceService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private itemService : ItemService,
    private notifier: NotifierService,

  ) {}
  @Output() ambitoModificadoEvent = new EventEmitter();

  modificaritemSubscription: Subscription;

  ordenes : Number[] = [];
  item : Item;
  modificarForm: FormGroup;
  autorizationFile: File;



  ngOnInit() {
    this.modificarForm = new FormGroup({
      'nombre': new FormControl(this.item.nombre, Validators.required),
      'link_ruta': new FormControl(this.item.link_ruta, Validators.required),
      'video': new FormControl(this.item.video, Validators.required),
      'ruta_imagen': new FormControl(this.item.ruta_imagen, Validators.required),
      'descripcion': new FormControl(this.item.descripcion, Validators.required),
      'orden': new FormControl(this.item.orden, Validators.required),
    });
    this.cargarDatosVista();
  }

  cargarDatosVista() {
   this.itemService.listarOrdenes().subscribe(
     numeros=>{
       this.ordenes=numeros;
     }
   ) ; 
  }

  onChangeFile(file: File) {
    if (file == undefined || file == null) {
      this.autorizationFile = null;
      return;
    }
    this.autorizationFile = file;
  }

  onSubmit(form: any) {
    if (!this.utilsService.isUndefinedOrNullOrEmpty(this.modificarForm.controls['nombre'].value)) {
      let item = Object.assign({}, this.item);
      let nombreSinEspacios = this.modificarForm.controls['nombre'].value.trim();
      item.id = this.item.id;
      item.nombre = nombreSinEspacios;
      item.descripcion = this.modificarForm.get("descripcion").value;
      item.orden = this.modificarForm.get('orden').value;
      item.video = this.modificarForm.get('video').value;
      item.link_ruta = this.modificarForm.get('link_ruta').value;
      item.ruta_imagen = null;
/*       
      let bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent, {
        initialState: {
          mensaje: "¿Está seguro que desea modificar?. El cambio se verá reflejado en los sistemas actuales."
        }
      }); */

      //bsModalRef.content.confirmarEvent.subscribe(() => {
        this.modificaritemSubscription = this.itemService.modificarItem(item, this.autorizationFile).subscribe(
          item => {            
            this.notifier.notify('success', "Se ha modificado la información de la solución correctamente");
            console.log("holaaaaa");
            this.bsModalRef.hide();
            this.ambitoModificadoEvent.emit(item);
          },
          error => {
            this.notifier.notify('error', 'El nombre modificado ya existe');
          }
        );
//      })


    }
  }





}
