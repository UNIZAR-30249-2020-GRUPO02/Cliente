import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BusquedaComponent>) {
  }
  ngOnInit(): void {
  }
  onCancelClick(): void {
     this.dialogRef.close();
  }
}
