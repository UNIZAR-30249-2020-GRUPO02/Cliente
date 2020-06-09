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
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VentanaDialogoComponent} from "../ventana-dialogo/ventana-dialogo.component";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  reserva: ReservaDTO;
  espacio;
  diasReserva: string;
  ventanaDialogoReferencia: MatDialogRef<any>;

  constructor(public sesionService: SesionService, public router: Router,
              public espaciosService: EspaciosService, public reservasService: ReservasService,
              public authService: AuthService, public parserService: ParserService,
              public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.reserva = this.sesionService.getReservaSeleccionada();
    this.espaciosService.getInfoEspacio(this.reserva.idEspacio).subscribe(data => {
      this.espacio = data;
    });
    this.diasReserva = this.parserService.diaArraytoString(this.reserva.dias);
  }

  aceptarReserva(){
    this.sesionService.setNumeroDialogo(0);
    this.ventanaDialogoReferencia = this.abrirDialogo();
    let nuevaReserva: ReservaDTO = null;
    this.reservasService.getReservaPorId(this.reserva.id).subscribe(reserva => {
      nuevaReserva = <ReservaDTO>reserva;
      if (nuevaReserva.estado == this.reserva.estado) {
        this.reservasService.cambiarEstado(this.reserva.id, "ACEPTADA",
          <string>$('#motivo').val()).subscribe(data => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(4);
        }, error => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(7);
        });
      } else {
        this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(3);
      }
      this.router.navigate(["/gerencia"]);
    });
  }

  rechazarReserva(){
    this.sesionService.setNumeroDialogo(0);
    this.ventanaDialogoReferencia = this.abrirDialogo();
    let nuevaReserva: ReservaDTO = null;
    this.reservasService.getReservaPorId(this.reserva.id).subscribe(reserva => {
      nuevaReserva = <ReservaDTO>reserva;
      if (nuevaReserva.estado == this.reserva.estado) {
        this.reservasService.cambiarEstado(this.reserva.id, "RECHAZADA",
          <string>$('#motivo').val()).subscribe(data => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(5);
        }, error => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(7);
        });
      } else {
        this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(3);
      }

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
    this.router.navigate(["/mod-datos"]);
  }

  goReservas() {
    this.router.navigate(["/gerencia"]);
  }

  abrirDialogo() {
    return this.matDialog.open(VentanaDialogoComponent, {
      width: '40%',
      height: 'auto'
    });
  }


}
