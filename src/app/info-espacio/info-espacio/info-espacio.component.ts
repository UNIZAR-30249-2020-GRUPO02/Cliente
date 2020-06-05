import { Component, OnInit } from '@angular/core';
import {SesionService} from "../../servicios/sesion.service";
import {EspacioDTO} from "../../entidades/espacio-dto";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-espacio',
  templateUrl: './info-espacio.component.html',
  styleUrls: ['./info-espacio.component.css']
})
export class InfoEspacioComponent implements OnInit {

  espacio: EspacioDTO;

  constructor(public router: Router,public dialogRef: MatDialogRef<InfoEspacioComponent>,
              public sesionService: SesionService) { }

  ngOnInit(): void {
    this.espacio = this.sesionService.getEspacioSeleccionadoInfo();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  goToHorario(){
    this.onCancelClick();
    this.router.navigate(["/mod-horario"]);
  }

}
