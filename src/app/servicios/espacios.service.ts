import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BusquedaDTO} from "../entidades/busqueda-dto";
import {DatosDTO} from "../entidades/datos-dto";
import {EspacioDTO} from "../entidades/espacio-dto"
import {Equipamiento} from "../entidades/equipamiento";
import {Dia} from "../entidades/dia.enum";
import { ParserService } from "./parser.service";
import {TipoEquipamiento} from "../entidades/tipo-equipamiento.enum";

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {

  private urlApp: string;  // URL to web api
  private datosDTO: DatosDTO = null;
  private busqDTO: BusquedaDTO = null;

  constructor(private http: HttpClient, private  parser: ParserService) {
     this.urlApp = 'http://localhost:8080/espacio';
  }

  public getInfoEspacio(id: string) {
    let params = new HttpParams()
      .set("id", id);
      return this.http.get(this.urlApp + '/espacio/getInfo', {params: params}).subscribe(data => {
        console.log(data);
      });
  }

  public buscarEspacio(edificio: string, tipoEspacio: string, equipamiento: Array<Equipamiento>, capacidad: number,
                       fechaInicio: Date, fechaFin: Date, horaInicio: number, horaFin: number,
                       dias: Array<Dia>, periodo: boolean) {

    let espacios = [];

    let params = new HttpParams()
      .set("edificio", edificio)
      .set("tipoEspacio", tipoEspacio)
      .set("equipamiento", this.parser.equipamientoArraytoString(equipamiento))
      .set("capacidad", capacidad.toString())
      .set("fechaInicio", fechaInicio.getTime().toString())
      .set("fechaFin", fechaFin.getTime().toString())
      .set("horaInicio", horaInicio.toString())
      .set("horaFin", horaFin.toString())
      .set("dias", this.parser.diaArraytoString(dias))
      .set("periodo", periodo.toString());
     return this.http.get(this.urlApp + '/search', {params: params});
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
