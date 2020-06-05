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
    var wmsSource = new OSM({
      url: 'http://91.250.168.62:8082/geoserver/web/wms',
      params: {'LAYERS': 'ne:ne', 'TILED': true},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });

    var wmsLayer = new TileLayer({
      source: wmsSource
    });

    var view = new View({
      center: [0, 0],
      zoom: 1
    });

    var map = new Map({
      layers: [wmsLayer],
      target: 'map',
      view: view
    });


  }



  goReservas() {
    const redirectUrl = '/reserva';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }

  goBusqueda() {
    this.router.navigate(["/busqueda"]);
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
