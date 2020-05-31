import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as $ from "jquery";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BusquedaComponent>) {
  }
  ngOnInit(): void {
    this.habilitarDias(false);
  }

  onCancelClick(): void {
     this.dialogRef.close();
  }

  busqueda(): void{
    if ($('#periodo').is(':checked')) {
    } else {
    }

  }

  cambioPeriodo(event) {
    console.log(event);
    if (event.target.checked) {
      this.habilitarDias(true);
    } else {
      this.habilitarDias(false);
    }
  }

  habilitarDias(periodo: boolean) {
    $('#periodo1').prop('disabled', !periodo);
    $('#periodo2').prop('disabled', !periodo);
    $('#periodo3').prop('disabled', !periodo);
    $('#periodo4').prop('disabled', !periodo);
    $('#periodo5').prop('disabled', !periodo);
    $('#periodo6').prop('disabled', !periodo);
    $('#periodo7').prop('disabled', !periodo);
    $('#fechaFinal').prop('disabled', !periodo);
  }

  checkEquipamiento(event) {
    $('#equipamientoNumero_' + event.target.id.split('_')[1]).prop('disabled', !event.target.checked);
  }


}
