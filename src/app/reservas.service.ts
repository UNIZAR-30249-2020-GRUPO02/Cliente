import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Reserv } from './reserv';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private reservasUrl = ' ';  // URL to web api
  constructor(private http: HttpClient) { }
  getReservas(): Observable<Reserv[]> {
    return this.http.get<Reserv[]>(this.reservasUrl);
  }
}
