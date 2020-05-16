import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import {BusquedaComponent} from '../busqueda/busqueda.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  goReservas() {
    const redirectUrl = '/reserva';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
  goBusqueda() {
    this.matDialog.open(BusquedaComponent, {
      width: '300px',
      height: '300px'
    });

  }
  // Para cuando se seleccione un espacio en el mapa
  goSeleccionEspacios() {
    const redirectUrl = '/seleccion-espacios';

    // Redirect the user
    this.router.navigate([redirectUrl]);
  }


}
