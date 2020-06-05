import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenteService } from '../servicios/gerente.service';
import { BusquedaDTO } from "../entidades/busqueda-dto"
import { ReservaDTO } from "../entidades/reserva-dto"
import {ReservasService} from "../servicios/reservas.service";

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-gerencia',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaComponent implements OnInit {
  reservas: Array<ReservaDTO> = [];

  constructor(public authService: AuthService, public router: Router, public gerenteService: GerenteService,
    public reservaService: ReservasService) { }

  ngOnInit(): void {
  }
  goInicio() {
    const redirectUrl = '/inicio';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }

  logout() {
      this.authService.logout();
      if (!this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/inicio';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
  }

  getReservas(edificio: string, tipo: string, inputTimeExit: number, inputTimeEntry: number,
    fechaIni: Date, fechaFin: Date){

    let busqDTO: BusquedaDTO = {
        edificio: edificio,
        tipoEspacio: tipo,
        equipamiento: null,
        capacidad: null,
        fechaInicio: fechaIni,
        fechaFin: fechaIni,
        horaInicio: inputTimeEntry,
        horaFin: inputTimeExit,
        dias: null,
        periodo: null
    }
    //Revisar falla lo que devuelve el get no se guarda correctamente.
    //this.reservas = this.reservaService.getReservasFiltradas(busqDTO);
  }

}
