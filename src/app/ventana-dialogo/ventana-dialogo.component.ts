import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {SesionService} from "../servicios/sesion.service";

@Component({
  selector: 'app-ventana-dialogo',
  templateUrl: './ventana-dialogo.component.html',
  styleUrls: ['./ventana-dialogo.component.css']
})
export class VentanaDialogoComponent implements OnInit {

  numeroDialogo: number;

  constructor(public dialogRef: MatDialogRef<VentanaDialogoComponent>, public sesionService: SesionService) { }

  ngOnInit(): void {
    this.numeroDialogo = this.sesionService.getNumeroDialogo();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  public setNumeroDialogo(numero: number) {
    this.numeroDialogo = numero;
  }


}
