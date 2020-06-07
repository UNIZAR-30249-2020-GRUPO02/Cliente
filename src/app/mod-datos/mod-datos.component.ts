import { Component, OnInit } from '@angular/core';
import {EspaciosService} from "../servicios/espacios.service";
import { TipoEquipamiento} from "../entidades/tipo-equipamiento.enum";
import {EspacioDTO} from "../entidades/espacio-dto";
import {Equipamiento} from "../entidades/equipamiento";
import {SesionService} from "../servicios/sesion.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoEspacioComponent} from "../info-espacio/info-espacio/info-espacio.component";
import * as $ from "jquery";

@Component({
  selector: 'app-mod-datos',
  templateUrl: './mod-datos.component.html',
  styleUrls: ['./mod-datos.component.css']
})
export class ModDatosComponent implements OnInit {

  espacios: Array<EspacioDTO> = [];
  espaciosSeleccionados: Array<EspacioDTO> = [];
  mensajeInformacion: String = "Todavía no has realizado ninguna búsqueda";

  constructor(public espaciosService: EspaciosService, public sesionService: SesionService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.espacios = this.sesionService.getEspaciosBuscados();
    this.espaciosSeleccionados = this.sesionService.getEspaciosSeleccionados();
  }

  checkEquipamiento(event) {
      $('#equipamientoNumero_' + event.target.id.split('_')[1]).prop('disabled', !event.target.checked);
  }

  busqueda(): void{

      let cancelar: boolean = false;

      this.mensajeInformacion = "Cargando espacios..."

      this.espacios = [];
      this.espaciosSeleccionados = [];
      if (!cancelar) {

        this.espaciosService.buscarEspacio(<string>$("#edificio").val(), <string>$("#tipoEspacio").val(), null,
          null, null, null, null, null, null, null).subscribe(data => {
          for (let index in data) {
            this.espacios.push(data[index]);
          }
          this.mensajeInformacion = "No hay ningún espacio asociado a esos criterios de búsqueda";
          this.sesionService.actualizarEspaciosBuscados(this.espacios);
        });

      } else {
        this.mensajeInformacion = "Hay un error con los criterios de búsqueda"
      }
  }

  modificar(): void{
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

          let capacidad = 0;
          if (<string>$('#capacidad').val() != "") {
            capacidad = <number>$('#capacidad').val();
          }
    let reservable: boolean = $('#reservable').prop("checked");
    this.espaciosService.modificarEspacio("id", equipamiento, capacidad, reservable, <string>$("#notas").val());
  }

  seleccionarEspacio(espacio: EspacioDTO) {
      this.espaciosSeleccionados.push(espacio);
      this.sesionService.anadirEspacioSeleccionado(espacio);
  }

  quitarEspacioSeleccionado(espacio: EspacioDTO) {
      let i = this.espaciosSeleccionados.indexOf(espacio);
      if ( i !== -1 ) {
        this.espaciosSeleccionados.splice( i, 1 );
      }
      this.sesionService.quitarEspacioSeleccionado(espacio);
  }

  goInfoEspacio(espacio: EspacioDTO) {
      this.sesionService.setEspacioSeleccionadoInfo(espacio);
      this.matDialog.open(InfoEspacioComponent, {
        width: '40%',
        height: 'auto'
      });
  }



}
