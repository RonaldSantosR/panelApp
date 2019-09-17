import { Component, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  titulo: string;
  mensaje: string;
  mensaje2: string;
  mensaje3: string;

  ngOnInit() {
  }

  confirmar(){
    //this.confirmarEvent.emit();
    this.bsModalRef.hide();
  }
}
