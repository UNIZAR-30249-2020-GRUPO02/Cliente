import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservaDTO} from "../entidades/reserva-dto"
import {ReservasService} from "../servicios/reservas.service";
import {EstadoReserva} from "../entidades/estado-reserva.enum";
import {SesionService} from "../servicios/sesion.service";
import * as $ from "jquery";

import {AuthService} from '../auth/auth.service';
import {Usuario} from "../entidades/usuario";
import {Dia} from "../entidades/dia.enum";

@Component({
  selector: 'app-gerencia',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaComponent implements OnInit {

  reservas: Array<ReservaDTO> = [];
  mensajeInformacion: String = "Todavía no has realizado ninguna búsqueda";

  constructor(public authService: AuthService, public router: Router,
              public sesionService: SesionService, public reservaService: ReservasService) { }

  ngOnInit(): void {
  }

  logout() {
      this.authService.logout();
      if (!this.authService.isLoggedIn) {
        const redirectUrl = '/inicio';
        this.router.navigate([redirectUrl]);
      }
  }

  getReservas() {
    this.mensajeInformacion = "Cargando reservas..."

    let cancelar: boolean = false;

    let estado = EstadoReserva.PENDIENTE;
    if (<string>$("#estado").val() == "Aceptadas") {
      estado = EstadoReserva.ACEPTADA;
    }
    let edificio = <string>$("#edificio").val();
    let tipoEspacio = <string>$("#tipoEspacio").val();
    let horaEntrada = <number>$("#horaEntrada").val();
    let horaSalida = <number>$("#horaSalida").val();
    let fechaInicio: Date = new Date();
    if (<string>$("#fechaInicio").val() != "") {
      let fechaInicioString: string = <string>$("#fechaInicio").val();
      let fechaInicioArray = fechaInicioString.split("-");
      fechaInicio.setFullYear(+fechaInicioArray[0], +fechaInicioArray[1] -1 , +fechaInicioArray[2]);
      fechaInicio.setHours(0,0,0,0);
    } else {
      fechaInicio.setFullYear(2020, 0, 1);
    }

    let fechaFin: Date = new Date();
    if (<string>$("#fechaFinal").val() != "") {
      let fechaFinString: string = <string>$("#fechaFinal").val();
      let fechaFinArray = fechaFinString.split("-");
      fechaFin.setFullYear(+fechaFinArray[0], +fechaFinArray[1] - 1, +fechaFinArray[2]);
      fechaFin.setHours(0,0,0,0);
    } else {
      fechaFin.setFullYear(2021, 11, 31);
    }

    if (!(fechaInicio >= fechaFin) && !(horaEntrada >= horaSalida)) {
      this.reservaService.getReservasFiltradas(edificio, tipoEspacio, fechaInicio, fechaFin,
        horaEntrada, horaSalida, estado).subscribe(data => {
        for (let index in data) {
          this.reservas.push(data[index]);
        }
        this.mensajeInformacion = "No hay ninguna reserva asociada a esos criterios de búsqueda";
      });
    } else {
      this.mensajeInformacion = "Hay un error con los criterios de búsqueda";
    }

    let usuario: Usuario = {
      nombre: "Gonzalo",
      apellidos: "Berné",
      email: "715891@unizar.es",
      telefono: 562387642387,
      nia: 715891
    }

    let reserva: ReservaDTO = {
      id: "id",
      idEspacio: "AULA 0.01",
      horaInicio: 9,
      horaFin: 14,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      estado: "Pendiente",
      usuario: usuario,
      dias: [Dia.DOMINGO, Dia.JUEVES, Dia.MARTES]
    }
    this.reservas.push(reserva);

    //Revisar falla lo que devuelve el get no se guarda correctamente.
    //this.reservas = this.reservaService.getReservasFiltradas(busqDTO);
  }

  goEspacios(){
    this.router.navigate(["/mod-datos"]);
  }

  goAccept(reserva: ReservaDTO){
    this.sesionService.setReservaSeleccionada(reserva);
    this.router.navigate(["/accept"]);
  }

}
