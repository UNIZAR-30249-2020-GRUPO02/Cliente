import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// Open layers imports

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';


import {BusquedaComponent} from '../busqueda/busqueda.component';
import {LoginComponent} from '../auth/login/login.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(public router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
    var map = new Map({
          target: 'hotel_map',
          layers: [
            new TileLayer({
              source: new OSM()
            })
          ],
          view: new View({
            center: olProj.fromLonLat([7.0785, 51.4614]),
            zoom: 5
          })
        });
  }

  goReservas() {
    const redirectUrl = '/reserva';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }

  goBusqueda() {
    this.matDialog.open(BusquedaComponent, {
      width: '1400px',
      height: '650px'
    });

  }

  goLoginGerencia() {
      this.matDialog.open(LoginComponent, {
        width: '500px',
        height: '400px'
      });

  }

  // Para cuando se seleccione un espacio en el mapa
  goSeleccionEspacios() {
    const redirectUrl = '/seleccion-espacios';

    // Redirect the user
    this.router.navigate([redirectUrl]);
  }


}
