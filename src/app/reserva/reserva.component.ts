import {Component, OnInit} from '@angular/core';
import {SesionService} from "../servicios/sesion.service";
import {EspacioDTO} from "../entidades/espacio-dto";
import * as $ from "jquery";
import {ReservaDTO} from "../entidades/reserva-dto";
import {EstadoReserva} from "../entidades/estado-reserva.enum";
import {Usuario} from "../entidades/usuario";
import {ReservasService} from "../servicios/reservas.service";
import {ParserService} from "../servicios/parser.service";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  espacios: Array<EspacioDTO> = [];
  espacioSeleccionado: EspacioDTO;
  datosReserva;

  constructor(public sesionService: SesionService, public reservasService: ReservasService,
              public parserService: ParserService){ }
  // getReservas(): void{
    //  this.reservaService.getReservas()
    // .subscribe(reservas => this.reservas = reservas);
  // }
  // selectedReserva: Reserv;
  // onSelect(reserva: Reserv): void{
    // this.selectedReserva = reserva;
  // }

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
    let usuario: Usuario = {
      nombre: <string>$('#inputName').val(),
      apellidos: <string>$('#inputApellidos').val(),
      email: <string>$('#inputEmail').val(),
      telefono: <number>$('#inputTlf').val(),
      nia: <number>$('#inputNIA').val()
    }
    let reserva: ReservaDTO = {
      dias: this.sesionService.getDias(),
      fechaInicio: this.datosReserva.fechaInicio,
      fechaFin: this.datosReserva.fechaFinal,
      horaInicio: this.datosReserva.horaInicio,
      horaFin: this.datosReserva.horaFinal,
      estado: this.parserService.estadoReservatoString(EstadoReserva.PENDIENTE),
      idEspacio: this.espacioSeleccionado.id,
      usuario: usuario
    }
    this.reservasService.crearReserva(reserva);
  }

}
