import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Router} from "@angular/router";
import {EspacioDTO} from "../entidades/espacio-dto";
import {HorarioDTO} from "../entidades/horario-dto";
import {SesionService} from "../servicios/sesion.service";
import {ReservasService} from "../servicios/reservas.service";
import {ParserService} from "../servicios/parser.service";
import * as $ from "jquery";

@Component({
  selector: 'app-mod-horario',
  templateUrl: './mod-horario.component.html',
  styleUrls: ['./mod-horario.component.css']
})
export class ModHorarioComponent implements OnInit {

  espacio: EspacioDTO;
  horarios: Array<HorarioDTO> = [];
  fechaInicioD: Date;

  constructor(public sesionService: SesionService, public router: Router,
              public reservasService: ReservasService, public parserService: ParserService) { }

  ngOnInit(): void {
    this.espacio = this.sesionService.getEspacioSeleccionadoInfo();
    this.getHorarios();
  }


  goInicio() {
    this.router.navigate(["/inicio"]);
  }

  goBusqueda() {
    this.router.navigate(["/busqueda"]);
  }

  goReserva() {
    this.router.navigate(["/reserva"]);
  }

  getHorarios() {
    this.horarios = [];

    let fechaInicio: Date = new Date();
    if (<string>$("#fechaInicio").val() != "") {
      let fechaInicioString: string = <string>$("#fechaInicio").val();
      let fechaInicioArray = fechaInicioString.split("-");
      fechaInicio.setFullYear(+fechaInicioArray[0], +fechaInicioArray[1] -1 , +fechaInicioArray[2]);
      fechaInicio.setHours(0,0,0,0);
    } else {
      fechaInicio.setFullYear(2020, 5, 1);
    }

    let fechaFin: Date = new Date();
    if (<string>$("#fechaFinal").val() != "") {
      let fechaFinString: string = <string>$("#fechaFinal").val();
      let fechaFinArray = fechaFinString.split("-");
      fechaFin.setFullYear(+fechaFinArray[0], +fechaFinArray[1] - 1, +fechaFinArray[2]);
      fechaFin.setHours(0,0,0,0);
    } else {
      fechaFin.setFullYear(2020, 5, 7);
    }
    this.fechaInicioD = fechaInicio;

    this.reservasService.getHorarios(this.espacio.id, fechaInicio, fechaFin).subscribe(data => {
      for (let index in data) {
        let h = new HorarioDTO();
        h.horasOcupadas = data[index].horasOcupadas;
        h.dia = new Date(data[index].dia);
        h.horaFin = data[index].horaFin;
        h.horaInicio = data[index].horaInicio;
        h.idEspacio = data[index].idEspacio;
        this.horarios.push(h);
      }
      });
    /*let i = 0;
    for (let index of this.numberReturn(17)) {
      let h = new HorarioDTO();
      h.horasOcupadas = [12, 17, 20];
      h.dia = new Date( 1590966141482 + (87277777 * i));
      h.horaFin = 22;
      h.horaInicio = 8;
      h.idEspacio = "idEspacio";
      this.horarios.push(h);
      i++;
    }*/
  }

  numberReturn(length){
    return new Array(length);
  }

  numberReturnSemanas(){
    let length = Math.trunc(this.horarios.length / 7) + 1;
    return new Array(length);
  }


}
