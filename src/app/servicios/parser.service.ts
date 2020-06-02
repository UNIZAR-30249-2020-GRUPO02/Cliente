import { Injectable } from '@angular/core';
import {Dia} from "../entidades/dia.enum";
import {Equipamiento} from "../entidades/equipamiento";
import {TipoEquipamiento} from "../entidades/tipo-equipamiento.enum";
import {EstadoReserva} from "../entidades/estado-reserva.enum";

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  public diaArraytoString (dias: Array<Dia>) {
    let stringReturn: string = "";
    for (let index in dias) {
      if (stringReturn == "") {
        stringReturn = this.diaToString(dias[index]);
      } else {
        stringReturn += "," + this.diaToString(dias[index]);
      }
    }
  return stringReturn
  }

  public equipamientoArraytoString (equipamientos: Array<Equipamiento>) {
    let stringReturn: string = "";
    for (let index in equipamientos) {
      if (stringReturn == "") {
        stringReturn = this.tipoEquipamientoToString(equipamientos[index].tipo) + ";"
          + equipamientos[index].cantidad;
      } else {
        stringReturn += "," + this.tipoEquipamientoToString(equipamientos[index].tipo)
          + ";" + equipamientos[index].cantidad;
      }
    }
    return stringReturn
  }

  public diaToString(dia: Dia) {
    if (dia.toString() == "1") {
      return "DOMINGO";
    } else if (dia.toString() == "2") {
      return "LUNES";
    } else if (dia.toString() == "3") {
      return "MARTES";
    } else if (dia.toString() == "4") {
      return "MIERCOLES";
    } else if (dia.toString() == "5") {
      return "JUEVES";
    } else if (dia.toString() == "6") {
      return "VIERNES";
    } else if (dia.toString() == "7") {
      return "SABADO";
    }
  }

  public tipoEquipamientoToString(equipamiento: TipoEquipamiento) {
    if (equipamiento.toString() == "cañon") {
      return "CANON";
    } else if (equipamiento.toString() == "pantalla") {
      return "PANTALLA";
    } else if (equipamiento.toString() == "tv") {
      return "TV";
    } else if (equipamiento.toString() == "video") {
      return "VIDEO";
    } else if (equipamiento.toString() == "dvd") {
      return "DVD";
    } else if (equipamiento.toString() == "pizarra") {
      return "PIZARRA";
    } else if (equipamiento.toString() == "ordenador") {
      return "ORDENADOR";
    }
  }

  public estadoReservatoString(estado: EstadoReserva) {
    if (estado.toString() == "Aceptada") {
      return "ACEPTADA";
    } else if (estado.toString() == "Rechazada") {
      return "RECHAZADA";
    } else if (estado.toString() == "Pendiente") {
      return "PENDIENTE";
    }
  }

}
