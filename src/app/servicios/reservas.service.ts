import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReservaDTO } from "../entidades/reserva-dto"

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
  public crearReserva(nuevaReserva: ReservaDTO) {
    //return this.http.post<ReservaDTO>(this.reservasUrl + '/createReserva' + nuevaReserva);
  }
  public cambiarEstado(id: number, nuevoEstado: string) {
    return this.http.patch(this.reservasUrl + '/changeState/' + id, nuevoEstado);
  }
}
