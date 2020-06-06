import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReservasService} from "../servicios/reservas.service";
import {SesionService} from "../servicios/sesion.service";
import {EspacioDTO} from "../entidades/espacio-dto";
import {ReservaDTO} from "../entidades/reserva-dto";
import {EstadoReserva} from "../entidades/estado-reserva.enum";
import {ParserService} from "../servicios/parser.service";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {
  datosReserva;

  constructor(public sesionService: SesionService, public router: Router, public reservasService: ReservasService) { }

  ngOnInit(): void {
  //Debe obtener la reserva actualmente seleccionada desde pantalla de gerencia
    this.datosReserva = this.sesionService.getDatosReserva();
  }

  aceptarReserva(id: number, estadoNuevo: string, motivo: string){
    this.reservasService.cambiarEstado(id, estadoNuevo, motivo);

    this.router.navigate(["/gerencia"]);
  }

  rechazarReserva(){

    this.router.navigate(["/gerencia"]);
  }

}
