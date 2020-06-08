import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GerenteService } from "../../servicios/gerente.service";

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, public authService: AuthService,
              public router: Router, public gerenteService: GerenteService) {
    this.setMessage();
  }

  onCancelClick(): void {
       this.dialogRef.close();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(user: string, password: string) {
    this.message = 'Trying to log in ...';

    this.gerenteService.logIn(user, password).subscribe(auth => {
      if (auth) {
        this.authService.login().subscribe(() => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
            this.onCancelClick();
            // Usually you would use the redirect URL from the auth service.
            // However to keep the example simple, we will always redirect to `/admin`.
            const redirectUrl = '/gerencia';

            // Redirect the user
            this.router.navigate([redirectUrl]);
          }
        });
      }
    });
  }

}
