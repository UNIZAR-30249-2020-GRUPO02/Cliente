import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EspacioDTO } from "../entidades/espacio-dto"
import { BusquedaDTO } from "../entidades/busqueda-dto"
import { DatosDTO } from "../entidades/datos-dto"
import {Equipamiento} from "../entidades/equipamiento";

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {

  private urlApp: string;  // URL to web api
  private datosDTO: DatosDTO = null;
  private busqDTO: BusquedaDTO = null;

  constructor(private http: HttpClient) {
     this.urlApp = 'http://localhost:3000';
  }

  public getInfoEspacio(id: string) {
      return this.http.get(this.urlApp + '/getInfo'+ id);
  }

  public buscarEspacio(edificio: string, tipoEspacio: string, equipamiento: Array<Equipamiento>,  capacidad: number) {
     this.busqDTO = {
        edificio: edificio,
        tipoEspacio:  tipoEspacio,
        equipamiento: equipamiento,
        capacidad: capacidad
     };
     return this.http.get(this.urlApp + '/search'+ this.busqDTO);
  }

  public getInfoEspacioFiltered(edificio: string, tipo: string) {
    let params = new HttpParams()
          .set("edificio", edificio).set("tipo", tipo);
        return this.http.get(this.urlApp + '/getInfoFiltered'+ {params: params});
  }

  public modificarEspacio( id: string, equipamiento: Array<Equipamiento>, capacidad: number, reservable: boolean,
                           notas: string) {
    this.datosDTO = {
        id: id,
        equipamiento: equipamiento,
        capacidad: capacidad,
        reservable: reservable,
        notas: notas
    };
     return this.http.patch(this.urlApp + '/modifySpace', this.datosDTO);
  }

  public obtenerHorarioEntreFechas(idEspacio: string, inicio: string, fin: string) {
    let params = new HttpParams()
              .set("idEspacio", idEspacio).set("inicio", inicio).set("fin", fin);
    return this.http.patch(this.urlApp + '/getSpacesBetween', {params: params});
  }


}
