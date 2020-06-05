import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReservaDTO } from "../entidades/reserva-dto"
import { BusquedaDTO } from "../entidades/busqueda-dto"
import {Equipamiento} from "../entidades/equipamiento";

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

  public getReservasFiltradas(edificio: string, tipoEspacio: string, equipamiento: Array<Equipamiento>,
                              capacidad: number) {
    /*this.busqDTO = {
              edificio: edificio,
              tipoEspacio: tipoEspacio,
              equipamiento: equipamiento,
              capacidad: capacidad
            };*/

    return this.http.get(this.urlApp + '/getReservasFiltradas'+ this.busqDTO);
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
