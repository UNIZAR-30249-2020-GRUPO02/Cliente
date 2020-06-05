import { Component, OnInit } from '@angular/core';
import {EspaciosService} from "../servicios/espacios.service";
import {Equipamiento} from "../entidades/equipamiento";

@Component({
  selector: 'app-mod-datos',
  templateUrl: './mod-datos.component.html',
  styleUrls: ['./mod-datos.component.css']
})
export class ModDatosComponent implements OnInit {

  constructor(public espacioService: EspaciosService) { }

  ngOnInit(): void {
  }

  modEspacio(id: string, equipamiento: Array<Equipamiento>, capacidad: number, notas: string){
      this.espacioService.modificarEspacio(id, equipamiento, capacidad, null, notas);
  }
}
