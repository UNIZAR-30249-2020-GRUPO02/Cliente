import { Injectable } from '@angular/core';
import {EspacioDTO} from "../entidades/espacio-dto";
import {Dia} from "../entidades/dia.enum"
import {ParserService} from "./parser.service";
import {ReservaDTO} from "../entidades/reserva-dto";

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  //Usuario
  espaciosBuscados: Array<EspacioDTO> = [];
  espaciosSeleccionados: Array<EspacioDTO> = [];
  espacioSeleccionadoInfo: EspacioDTO;
  datosDisponibles: boolean = false;
  fechaInicio: Date;
  fechaFinal: Date;
  horaInicio: number;
  horaFinal: number;
  dias: Array<Dia> = [];
  periodo: boolean;

  //Gerente
  reservaSeleccionada: ReservaDTO;

  //Ventana dialogo
  numeroDialogo: number;

  constructor(public parserService: ParserService) { }

  public getEspaciosBuscados() {
    return this.espaciosBuscados;
  }

  public getEspaciosSeleccionados() {
    return this.espaciosSeleccionados;
  }

  public setEspacioSeleccionadoInfo(espacio: EspacioDTO) {
    this.espacioSeleccionadoInfo = espacio;
  }

  public getEspacioSeleccionadoInfo() {
    return this.espacioSeleccionadoInfo;
  }

  public actualizarDatosReserva(fechaInicio: Date, fechaFinal: Date, horaInicio: number, horaFinal: number,
                         dias: Array<Dia>, periodo: boolean) {
    this.datosDisponibles = true;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.horaInicio = horaInicio;
    this.horaFinal = horaFinal;
    this.dias = dias;
    this.periodo = periodo;
  }

  public getDatosReserva() {
    return {
      datosDisponibles: this.datosDisponibles,
      fechaInicio: this.fechaInicio,
      fechaFinal: this.fechaFinal,
      horaInicio: this.horaInicio,
      horaFinal: this.horaFinal,
      dias: this.parserService.diaArraytoString(this.dias),
      periodo: this.periodo
    }
  }

  public actualizarEspaciosBuscados(espacios: Array<EspacioDTO>) {
    this.espaciosBuscados = espacios;
    this.espaciosSeleccionados = [];
  }

  public anadirEspacioSeleccionado(espacio: EspacioDTO) {
    let i = this.espaciosSeleccionados.indexOf(espacio);
    if ( i == -1 ) {
      this.espaciosSeleccionados.push(espacio);
    }
  }

  public quitarEspacioSeleccionado(espacio: EspacioDTO) {
    let i = this.espaciosSeleccionados.indexOf(espacio);
    if ( i !== -1 ) {
      this.espaciosSeleccionados.splice( i, 1 );
    }
  }

  public getDias() {
    return this.dias;
  }

  public setReservaSeleccionada(reserva: ReservaDTO) {
    this.reservaSeleccionada = reserva;
  }

  public getReservaSeleccionada() {
    return this.reservaSeleccionada;
  }

  public setNumeroDialogo(numero: number) {
    this.numeroDialogo = numero;
  }

  public getNumeroDialogo() {
    return this.numeroDialogo;
  }

}
