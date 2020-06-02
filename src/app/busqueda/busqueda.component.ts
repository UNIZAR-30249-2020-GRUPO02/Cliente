import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as $ from "jquery";
import {Equipamiento} from "../entidades/equipamiento";
import {Dia} from "../entidades/dia.enum";
import {EspaciosService} from "../servicios/espacios.service";
import { TipoEquipamiento} from "../entidades/tipo-equipamiento.enum";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BusquedaComponent>, public espaciosService: EspaciosService) {
  }
  ngOnInit(): void {
    this.habilitarDias(false);
  }

  onCancelClick(): void {
     this.dialogRef.close();
  }

  busqueda(): void{

    let fechaInicio: Date = new Date();
    if (<string>$("#fechaInicio").val() != "") {
      let fechaInicioString: string = <string>$("#fechaInicio").val();
      let fechaInicioArray = fechaInicioString.split("-");
      fechaInicio.setFullYear(+fechaInicioArray[0], +fechaInicioArray[1], +fechaInicioArray[2]);
    } else {
      fechaInicio.setFullYear(2020, 1, 1);
    }

    let fechaFin: Date = new Date();
    if (<string>$("#fechaFinal").val() != "") {
      let fechaFinString: string = <string>$("#fechaFinal").val();
      let fechaFinArray = fechaFinString.split("-");
      fechaFin.setFullYear(+fechaFinArray[0], +fechaFinArray[1], +fechaFinArray[2]);
    } else {
      fechaFin.setFullYear(2020, 11, 1);
    }

    let equipamiento: Array<Equipamiento> = [];
    if ($('#equipamientoCheck_1').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_1').val() != "") {
        cantidad = <number>$('#equipamientoNumero_1').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.CANON,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_2').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_2').val() != "") {
        cantidad = <number>$('#equipamientoNumero_2').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.PANTALLA,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_3').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_3').val() != "") {
        cantidad = <number>$('#equipamientoNumero_3').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.TV,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_4').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_4').val() != "") {
        cantidad = <number>$('#equipamientoNumero_4').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.VIDEO,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_5').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_5').val() != "") {
        cantidad = <number>$('#equipamientoNumero_5').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.DVD,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_6').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_6').val() != "") {
        cantidad = <number>$('#equipamientoNumero_6').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.PIZARRA,
        cantidad: cantidad,
        maxCantidad: 0});
    }
    if ($('#equipamientoCheck_7').prop("checked")) {
      let cantidad = 0;
      if (<string>$('#equipamientoNumero_7').val() != "") {
        cantidad = <number>$('#equipamientoNumero_7').val();
      }
      equipamiento.push({
        tipo: TipoEquipamiento.ORDENADOR,
        cantidad: cantidad,
        maxCantidad: 0});
    }

    let dias: Array<Dia> = [];
    if ($('#periodo').prop("checked")) {
      if ($('#periodo1').prop("checked")) {
        dias.push(Dia.LUNES);
      }
      if ($('#periodo2').prop("checked")) {
        dias.push(Dia.MARTES);
      }
      if ($('#periodo3').prop("checked")) {
        dias.push(Dia.MIERCOLES);
      }
      if ($('#periodo4').prop("checked")) {
        dias.push(Dia.JUEVES);
      }
      if ($('#periodo5').prop("checked")) {
        dias.push(Dia.VIERNES);
      }
      if ($('#periodo6').prop("checked")) {
        dias.push(Dia.SABADO);
      }
      if ($('#periodo7').prop("checked")) {
        dias.push(Dia.DOMINGO);
      }
    }

    let capacidad = 0;
    if (<string>$('#capacidad').val() != "") {
      capacidad = <number>$('#capacidad').val();
    }

    this.espaciosService.buscarEspacio(<string>$("#edificio").val(), <string>$("#tipoEspacio").val(),
    equipamiento, capacidad, fechaInicio, fechaFin, <number>$("#horaEntrada").val(),
      <number>$("#horaSalida").val(), dias, $('#periodo').prop("checked"));
  }

  cambioPeriodo(event) {
    console.log(event);
    if (event.target.checked) {
      this.habilitarDias(true);
    } else {
      this.habilitarDias(false);
    }
  }

  habilitarDias(periodo: boolean) {
    $('#periodo1').prop('disabled', !periodo);
    $('#periodo2').prop('disabled', !periodo);
    $('#periodo3').prop('disabled', !periodo);
    $('#periodo4').prop('disabled', !periodo);
    $('#periodo5').prop('disabled', !periodo);
    $('#periodo6').prop('disabled', !periodo);
    $('#periodo7').prop('disabled', !periodo);
    $('#fechaFinal').prop('disabled', !periodo);
  }

  checkEquipamiento(event) {
    $('#equipamientoNumero_' + event.target.id.split('_')[1]).prop('disabled', !event.target.checked);
  }


}
