import { Component, OnInit } from '@angular/core';
import {SesionService} from "../../servicios/sesion.service";
import {EspacioDTO} from "../../entidades/espacio-dto";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-info-espacio',
  templateUrl: './info-espacio.component.html',
  styleUrls: ['./info-espacio.component.css']
})
export class InfoEspacioComponent implements OnInit {

  espacio: EspacioDTO;

  constructor(public dialogRef: MatDialogRef<InfoEspacioComponent>, public sesionService: SesionService) { }

  ngOnInit(): void {
    this.espacio = this.sesionService.getEspacioSeleccionadoInfo();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
