import {Component, OnInit} from '@angular/core';
import {SesionService} from "../servicios/sesion.service";
import {EspacioDTO} from "../entidades/espacio-dto";
import * as $ from "jquery";
import {ReservaDTO} from "../entidades/reserva-dto";
import {EstadoReserva} from "../entidades/estado-reserva.enum";
import {Usuario} from "../entidades/usuario";
import {ReservasService} from "../servicios/reservas.service";
import {ParserService} from "../servicios/parser.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VentanaDialogoComponent} from "../ventana-dialogo/ventana-dialogo.component";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  espacios: Array<EspacioDTO> = [];
  espacioSeleccionado: EspacioDTO = null;
  datosReserva;
  ventanaDialogoReferencia: MatDialogRef<any>;

  constructor(public sesionService: SesionService, public reservasService: ReservasService,
              public parserService: ParserService, public router: Router,
              public matDialog: MatDialog){ }

  ngOnInit(): void {
    this.espacios = this.sesionService.getEspaciosSeleccionados();
    this.datosReserva = this.sesionService.getDatosReserva();
    console.log(this.datosReserva.dias);
  }

  seleccionarRow(i) {
    for (let index in this.espacios) {
      $('#espacioRow_' + index).prop('style', '');
    }
    this.espacioSeleccionado = this.espacios[i];
    $('#espacioRow_' + i).prop('style', 'background-color: lightgray; color: black');
  }

  crearReserva() {
    if (this.espacioSeleccionado != null) {
      this.sesionService.setNumeroDialogo(0);
      this.ventanaDialogoReferencia = this.abrirDialogo();

      if (<string>$('#inputName').val() == "" &&
          <string>$('#inputApellidos').val() == "" &&
          <string>$('#inputEmail').val() == "" &&
          <string>$('#inputTlf').val() == "" &&
          <string>$('#inputNIA').val()) {
        this.sesionService.setNumeroDialogo(8);
        this.ventanaDialogoReferencia = this.abrirDialogo();
      } else {

        let usuario: Usuario = {
          nombre: <string>$('#inputName').val(),
          apellidos: <string>$('#inputApellidos').val(),
          email: <string>$('#inputEmail').val(),
          telefono: <number>$('#inputTlf').val(),
          nia: <number>$('#inputNIA').val()
        }

        let reserva: ReservaDTO = {
          id: "",
          dias: this.sesionService.getDias(),
          fechaInicio: this.datosReserva.fechaInicio,
          fechaFin: this.datosReserva.fechaFinal,
          horaInicio: this.datosReserva.horaInicio,
          horaFin: this.datosReserva.horaFinal - 1,
          estado: this.parserService.estadoReservatoString(EstadoReserva.PENDIENTE),
          idEspacio: this.espacioSeleccionado.id,
          usuario: usuario
        }
        this.reservasService.crearReserva(reserva).subscribe(data => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(6);
        }, error => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(7);
        });
      }
    } else {
      this.sesionService.setNumeroDialogo(8);
      this.ventanaDialogoReferencia = this.abrirDialogo();
    }

  }

  goInicio() {
    this.router.navigate(["/inicio"]);
  }

  goBusqueda() {
    this.router.navigate(["/busqueda"]);
  }

  abrirDialogo() {
    return this.matDialog.open(VentanaDialogoComponent, {
      width: '40%',
      height: 'auto'
    });
  }

}
