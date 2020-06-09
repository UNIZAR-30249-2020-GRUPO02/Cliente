import {Component, OnInit} from '@angular/core';
import {EspaciosService} from "../servicios/espacios.service";
import {TipoEquipamiento} from "../entidades/tipo-equipamiento.enum";
import {EspacioDTO} from "../entidades/espacio-dto";
import {Equipamiento} from "../entidades/equipamiento";
import {SesionService} from "../servicios/sesion.service";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {InfoEspacioComponent} from "../info-espacio/info-espacio/info-espacio.component";
import * as $ from "jquery";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {VentanaDialogoComponent} from "../ventana-dialogo/ventana-dialogo.component";

@Component({
  selector: 'app-mod-datos',
  templateUrl: './mod-datos.component.html',
  styleUrls: ['./mod-datos.component.css']
})
export class ModDatosComponent implements OnInit {

  ventanaDialogoReferencia: MatDialogRef<any>;
  espacios: Array<EspacioDTO> = [];
  espacioSeleccionado: EspacioDTO;
  espaciosSeleccionados: Array<EspacioDTO> = [];
  mensajeInformacion: String = "Todavía no has realizado ninguna búsqueda";
  cantidadEq1;
  cantidadMaxEq1;
  cantidadEq2;
  cantidadMaxEq2;
  cantidadEq3;
  cantidadMaxEq3;
  cantidadEq4;
  cantidadMaxEq4;
  cantidadEq5;
  cantidadMaxEq5;
  cantidadEq6;
  cantidadMaxEq6;
  cantidadEq7;
  cantidadMaxEq7;

  constructor(public espaciosService: EspaciosService, public sesionService: SesionService,
              public matDialog: MatDialog, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.limpiar();
  }

  limpiar() {
    $('#equipamientoNumero_1').prop('disabled', true);
    $('#equipamientoNumero_2').prop('disabled', true);
    $('#equipamientoNumero_3').prop('disabled', true);
    $('#equipamientoNumero_4').prop('disabled', true);
    $('#equipamientoNumero_5').prop('disabled', true);
    $('#equipamientoNumero_6').prop('disabled', true);
    $('#equipamientoNumero_7').prop('disabled', true);
    $('#equipamientoNumero_1').val('');
    $('#equipamientoNumero_2').val('');
    $('#equipamientoNumero_3').val('');
    $('#equipamientoNumero_4').val('');
    $('#equipamientoNumero_5').val('');
    $('#equipamientoNumero_6').val('');
    $('#equipamientoNumero_7').val('');

    this.cantidadMaxEq1 = '';
    this.cantidadMaxEq2 = '';
    this.cantidadMaxEq3 = '';
    this.cantidadMaxEq4 = '';
    this.cantidadMaxEq5 = '';
    this.cantidadMaxEq6 = '';
    this.cantidadMaxEq7 = '';

    $('#capacidad').val('');
    $('#notas').val('');
  }

  busqueda(): void{

    this.limpiar();

      let cancelar: boolean = false;

      this.mensajeInformacion = "Cargando espacios..."

      this.espacios = [];
      this.espaciosSeleccionados = [];
      if (!cancelar) {

        this.espaciosService.getInfoEspacioFiltered(<string>$("#edificio").val(), <string>$("#tipoEspacio").val()).subscribe(data => {
          for (let index in data) {
            this.espacios.push(data[index]);
          }
          this.mensajeInformacion = "No hay ningún espacio asociado a esos criterios de búsqueda";
        });

      } else {
        this.mensajeInformacion = "Hay un error con los criterios de búsqueda"
      }
  }

  modificar(): void {
    this.sesionService.setNumeroDialogo(0);
    this.ventanaDialogoReferencia = this.abrirDialogo();
    let equipamiento: Array<Equipamiento> = [];
          if (!$('#equipamientoNumero_1').prop("disabled")) {
            let cantidad = this.cantidadEq1;
            if (<string>$('#equipamientoNumero_1').val() != "" && <number>$('#equipamientoNumero_1').val() >= 0
              && <number>$('#equipamientoNumero_1').val() <= this.cantidadMaxEq1) {
              cantidad = <number>$('#equipamientoNumero_1').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.CANON,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq1});
          }
          if (!$('#equipamientoNumero_2').prop("disabled")) {
            let cantidad = this.cantidadEq2;
            if (<string>$('#equipamientoNumero_2').val() != "" && <number>$('#equipamientoNumero_2').val() >= 0
              && <number>$('#equipamientoNumero_2').val() <= this.cantidadMaxEq2) {
              cantidad = <number>$('#equipamientoNumero_2').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.PANTALLA,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq2});
          }
          if (!$('#equipamientoNumero_3').prop("disabled")) {
            let cantidad = this.cantidadEq3;
            if (<string>$('#equipamientoNumero_3').val() != "" && <number>$('#equipamientoNumero_3').val() >= 0
              && <number>$('#equipamientoNumero_3').val() <= this.cantidadMaxEq3) {
              cantidad = <number>$('#equipamientoNumero_3').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.TV,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq3});
          }
          if (!$('#equipamientoNumero_4').prop("disabled")) {
            let cantidad = this.cantidadEq4;
            if (<string>$('#equipamientoNumero_4').val() != "" && <number>$('#equipamientoNumero_4').val() >= 0
              && <number>$('#equipamientoNumero_4').val() <= this.cantidadMaxEq4) {
              cantidad = <number>$('#equipamientoNumero_4').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.VIDEO,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq4});
          }
          if (!$('#equipamientoNumero_5').prop("disabled")) {
            let cantidad = this.cantidadEq5;
            if (<string>$('#equipamientoNumero_5').val() != "" && <number>$('#equipamientoNumero_5').val() >= 0
              && <number>$('#equipamientoNumero_5').val() <= this.cantidadMaxEq5) {
              cantidad = <number>$('#equipamientoNumero_5').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.DVD,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq5});
          }
          if (!$('#equipamientoNumero_6').prop("disabled")) {
            let cantidad = this.cantidadEq6;
            if (<string>$('#equipamientoNumero_6').val() != "" && <number>$('#equipamientoNumero_6').val() >= 0
              && <number>$('#equipamientoNumero_6').val() <= this.cantidadMaxEq6) {
              cantidad = <number>$('#equipamientoNumero_6').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.PIZARRA,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq6});
          }
          if (!$('#equipamientoNumero_7').prop("disabled")) {
            let cantidad = this.cantidadEq7;
            if (<string>$('#equipamientoNumero_7').val() != "" && <number>$('#equipamientoNumero_7').val() >= 0
              && <number>$('#equipamientoNumero_7').val() <= this.cantidadMaxEq7) {
              cantidad = <number>$('#equipamientoNumero_7').val();
            }
            equipamiento.push({
              tipo: TipoEquipamiento.ORDENADOR,
              cantidad: cantidad,
              maxCantidad: this.cantidadMaxEq7});
          }

          let capacidad = this.espacioSeleccionado.capacidad;
          if (<string>$('#capacidad').val() != "" && <number>$('#capacidad').val() > 0) {
            capacidad = <number>$('#capacidad').val();
          }
    let notas = <string>$('#notas').val();
    let reservable: boolean = <boolean>$('#reservable').prop("checked");

    let nuevoEspacio: EspacioDTO = null;
    this.espaciosService.getInfoEspacio(this.espacioSeleccionado.id).subscribe(espacio => {
      nuevoEspacio = <EspacioDTO>espacio;
      if (nuevoEspacio.capacidad == this.espacioSeleccionado.capacidad &&
          nuevoEspacio.equipamiento == this.espacioSeleccionado.equipamiento &&
          nuevoEspacio.notas == this.espacioSeleccionado.notas &&
          nuevoEspacio.reservable == this.espacioSeleccionado.reservable) {
        this.espaciosService.modificarEspacio(this.espacioSeleccionado.id, equipamiento, capacidad, reservable, notas).subscribe(data => {
          console.log(data);
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(2);
        }, error => {
          this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(7);
        });
      } else {
        this.ventanaDialogoReferencia.componentInstance.setNumeroDialogo(1);
      }

    });
  }

  seleccionarEspacio(i: number) {
    for (let index in this.espacios) {
      $('#espacioRow_' + index).prop('style', '');
    }
    this.espacioSeleccionado = this.espacios[i];
    $('#espacioRow_' + i).prop('style', 'background-color: lightgray; color: black');
    this.recargarDatosEspacio();
  }

  recargarDatosEspacio() {
    this.limpiar();

    $('#capacidad').val(this.espacioSeleccionado.capacidad);

    if (this.espacioSeleccionado.reservable) {
      $('#reservable').prop("checked", 1);
    } else {
      $('#reservable').prop("checked", 0);
    }

    $('#notas').val(this.espacioSeleccionado.notas);


    let index = 0;
    for (let i of this.espacioSeleccionado.equipamiento) {
      console.log(this.espacioSeleccionado.equipamiento[index].tipo.toString());
      if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "CANON") {
        this.cantidadEq1 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq1 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_1').prop('disabled', false);
        $('#equipamientoNumero_1').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "PANTALLA") {
        this.cantidadEq2 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq2 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_2').prop('disabled', false);
        $('#equipamientoNumero_2').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "TV") {
        this.cantidadEq3 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq3 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_3').prop('disabled', false);
        $('#equipamientoNumero_3').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "VIDEO") {
        this.cantidadEq4 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq4 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_4').prop('disabled', false);
        $('#equipamientoNumero_4').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "DVD") {
        this.cantidadEq5 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq5 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_5').prop('disabled', false);
        $('#equipamientoNumero_5').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "PIZARRA") {
        this.cantidadEq6 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq6 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_6').prop('disabled', false);
        $('#equipamientoNumero_6').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      } else if (this.espacioSeleccionado.equipamiento[index].tipo.toString() == "ORDENADOR") {
        this.cantidadEq7 = this.espacioSeleccionado.equipamiento[index].cantidad;
        this.cantidadMaxEq7 = this.espacioSeleccionado.equipamiento[index].maxCantidad;
        $('#equipamientoNumero_7').prop('disabled', false);
        $('#equipamientoNumero_7').val(this.espacioSeleccionado.equipamiento[index].cantidad);
      }
      console.log(i);
      index++;
    }
  }

  abrirDialogo() {
    return this.matDialog.open(VentanaDialogoComponent, {
      width: '40%',
      height: 'auto'
    });
  }

  verHorario(espacio: EspacioDTO) {
    this.sesionService.setEspacioSeleccionadoInfo(espacio);
    this.router.navigate(["/mod-horario"]);
  }

  logout() {
    this.authService.logout();
    if (!this.authService.isLoggedIn) {
      const redirectUrl = '/inicio';
      this.router.navigate([redirectUrl]);
    }
  }

  goReservas() {
    this.router.navigate(["/gerencia"]);
  }


}
