import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenteService } from '../servicios/gerente.service';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-gerencia',
  templateUrl: './gerencia.component.html',
  styleUrls: ['./gerencia.component.css']
})
export class GerenciaComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  goInicio() {
    const redirectUrl = '/inicio';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }

  logout() {
      this.authService.logout();
      if (!this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/inicio';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
  }

}
