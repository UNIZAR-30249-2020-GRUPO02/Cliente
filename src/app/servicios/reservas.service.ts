import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReservaDTO } from "../entidades/reserva-dto"
import { BusquedaDTO } from "../entidades/busqueda-dto"
import {Equipamiento} from "../entidades/equipamiento";
import {Dia} from "../entidades/dia.enum";
import {EstadoReserva} from "../entidades/estado-reserva.enum";

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private urlApp: string;  // URL to web api
  private busqDTO: BusquedaDTO = null;

  constructor(private http: HttpClient) {
    this.urlApp = 'http://localhost:8080/reserva';
  }

  public getReservasByEspacio(id: string) {
    let params = new HttpParams().set(id, id);
    return this.http.get(this.urlApp + '/getReservasByEspacio', {params: params});
  }

  public getReservasFiltradas(edificio: string, tipoEspacio: string, fechaInicio: Date, fechaFin: Date,
                              horaInicio: number, horaFin: number, estado: EstadoReserva) {
    let params = new HttpParams()
      .set("edificio", edificio)
      .set("tipoEspacio", tipoEspacio)
      .set("fechaInicio", fechaInicio.getTime().toString())
      .set("fechaFin", fechaFin.getTime().toString())
      .set("horaInicio", horaInicio.toString())
      .set("horaFin", horaFin.toString())
      .set("estado", estado.toString());
    return this.http.get(this.urlApp + '/getReservasFiltradas', {params: params});
  }


  public crearReserva(reserva: ReservaDTO) {
    return this.http.post<ReservaDTO>(this.urlApp + '/createReserva', reserva).subscribe(data => {
      console.log(data);
    });
  }

  public cambiarEstado(id: number, nuevoEstado: string, motivo: string) {
    let params = new HttpParams().set("nuevoEstado", nuevoEstado).set("motivo", motivo);
    return this.http.patch(this.urlApp + '/changeState/' + id, {params: params});
  }

  public getHorarios(idEspacio: string, fechaInicio: Date, fechaFin: Date) {
    let params = new HttpParams()
      .set("idEspacio", idEspacio)
      .set("fechaInicio", fechaInicio.getTime().toString())
      .set("fechaFin", fechaFin.getTime().toString());
    return this.http.get(this.urlApp + '/getHorarios', {params: params});
  }

}
