import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goReservas() {
    const redirectUrl = '/reserva';

    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
  goBusqueda() {
    const redirectUrl = '/busqueda';

    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
  // Para cuando se seleccione un espacio en el mapa
  goSeleccionEspacios() {
    const redirectUrl = '/seleccion-espacios';

    // Redirect the user
    this.router.navigate([redirectUrl]);
  }


}
