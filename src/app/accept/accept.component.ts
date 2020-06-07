import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReservasService} from "../servicios/reservas.service";
import {EspaciosService} from "../servicios/espacios.service";
import {SesionService} from "../servicios/sesion.service";
import {EspacioDTO} from "../entidades/espacio-dto";
import {ReservaDTO} from "../entidades/reserva-dto";
import {EstadoReserva} from "../entidades/estado-reserva.enum";
import * as $ from "jquery";
import {ParserService} from "../servicios/parser.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  reserva: ReservaDTO;
  espacio: EspacioDTO;
  diasReserva: string;

  constructor(public sesionService: SesionService, public router: Router,
              public espaciosService: EspaciosService, public reservasService: ReservasService,
              public authService: AuthService, public parserService: ParserService) { }

  ngOnInit(): void {
    this.reserva = this.sesionService.getReservaSeleccionada();
    this.espacio = this.espaciosService.getInfoEspacio(this.reserva.idEspacio);
    this.diasReserva = this.parserService.diaArraytoString(this.reserva.dias);
  }

  aceptarReserva(){
    this.reservasService.cambiarEstado(this.reserva.id, EstadoReserva.ACEPTADA,
      <string>$('#motivo').val()).subscribe(data => {
      // POP-UP
    });

    this.router.navigate(["/gerencia"]);
  }

  rechazarReserva(){
    this.reservasService.cambiarEstado(this.reserva.id, EstadoReserva.RECHAZADA,
      <string>$('#motivo').val()).subscribe(data => {
      // POP-UP
    });
    this.router.navigate(["/gerencia"]);
  }

  logout() {
    this.authService.logout();
    if (!this.authService.isLoggedIn) {
      const redirectUrl = '/inicio';
      this.router.navigate([redirectUrl]);
    }
  }

  goEspacios() {
    this.router.navigate(["/seleccion-espacios"]);
  }

  goReservas() {
    this.router.navigate(["/gerencia"]);
  }


}
