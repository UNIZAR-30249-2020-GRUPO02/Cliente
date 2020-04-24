import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../reservas.service';
import { Reserv } from '../reserv';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reserva: Reserv = {
    id: 1,
    user: 'Joaquin'
  };

  constructor(private reservaService: ReservasService) { }
  // getReservas(): void{
    //  this.reservaService.getReservas()
    // .subscribe(reservas => this.reservas = reservas);
  // }
  selectedReserva: Reserv;
  onSelect(reserva: Reserv): void{
    this.selectedReserva = reserva;
  }

  ngOnInit(): void {
    // this.getReservas();
  }

}
