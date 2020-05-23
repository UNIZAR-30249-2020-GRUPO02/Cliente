import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  private urlApp: string;  // URL to web api

  constructor(private http: HttpClient) {
    this.urlApp = 'http://localhost:3000';
  }

  public logInGerente(nomUsuario: string, password: string) {
        return this.http.patch(this.urlApp + '/signIn'+ nomUsuario, password);
  }

}
