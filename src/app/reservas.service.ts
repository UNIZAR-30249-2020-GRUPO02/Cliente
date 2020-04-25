import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private reservasUrl: string;  // URL to web api
  constructor(private http: HttpClient) {
    this.reservasUrl = 'http://localhost:8080/reservas';
  }
  public getReservasByEspacio() {
    return this.http.get(this.reservasUrl + '/getReservasByEspacio');
  }
  public getReservasFiltradas() {
    return this.http.get(this.reservasUrl + '/getReservasFiltradas');
  }
  public crearReserva() {
   // return this.http.post<ReservaDTO>(this.reservasUrl + '/createReserva');
  }
  public cambiarEstado() {
    // return this.http.patch(this.reservasUrl + '/changeState/{id}');
  }
}
