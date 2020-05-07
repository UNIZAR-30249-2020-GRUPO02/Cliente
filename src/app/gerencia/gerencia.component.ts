import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goInicio() {
    const redirectUrl = '/inicio';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }

}
