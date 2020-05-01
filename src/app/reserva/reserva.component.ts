import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(){ }
  // getReservas(): void{
    //  this.reservaService.getReservas()
    // .subscribe(reservas => this.reservas = reservas);
  // }
  // selectedReserva: Reserv;
  // onSelect(reserva: Reserv): void{
    // this.selectedReserva = reserva;
  // }

  ngOnInit(): void {
    // this.getReservas();
  }

}
