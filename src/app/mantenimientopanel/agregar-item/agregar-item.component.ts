import { OnInit, OnDestroy, Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/app/_Model/Item';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/_Service/item.service';
@Component({
    selector: 'app-agregar-item',
    templateUrl: './agregar-item.component.html',
    styleUrls: ['./agregar-item.component.css']
})

export class AgregarItemComponent implements OnInit{

    constructor(
        private bsModalRef: BsModalRef,
        private notifier: NotifierService,
        private itemService: ItemService
    ){}

    @Output() itemCreadoEvent = new EventEmitter<Item>();
    agregarForm: FormGroup;
    crearItemSubscription : Subscription;
    autorizationFile: File;


    ngOnInit(){
        this.agregarForm = new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'linkRuta': new FormControl('',Validators.required),
            'linkVideo': new FormControl('', Validators.required),
            'icono': new FormControl('', Validators.required),
            'descripcion': new FormControl('',Validators.required)
        });
    }

    onChangeFile(file: File) {
        if (file == undefined || file == null) {
          this.autorizationFile = null;
          return;
        }
        this.autorizationFile = file;
      }

    onSubmit(){
        let nombreSinEspacios = this.agregarForm.controls['nombre'].value.trim();
        if(nombreSinEspacios.length !== 0){
            let item : Item = new Item();
            item.nombre = nombreSinEspacios;
            item.link_ruta= this.agregarForm.get("linkRuta").value;
            item.video= this.agregarForm.get("linkVideo").value;
            //item.ruta_imagen=this.agregarForm.get("icono").value;
            item.descripcion=this.agregarForm.get("descripcion").value;
            this.crearItemSubscription = this.itemService.agregarItem(item, this.autorizationFile).subscribe(
                item =>{
                    this.notifier.notify('success', 'Se agrego el nuevo sistema');
                    this.bsModalRef.hide();
                    this.itemCreadoEvent.emit(item);
                },
                error => {
                    if(error.status === 400){
                        this.notifier.notify('error', error.error.message);
                    }
                }
            )
        }else {
            this.notifier.notify('error', 'Debe ingresar todos los datos');
          }
    }

}