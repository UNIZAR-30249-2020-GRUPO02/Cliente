export class ReservaDTO {
    id: string;
    horaInicio: Date;
    horaFin: Date;
    fechaFin: Date;
    fechaFin: Date;
    estado: EstadoReserva;
    user: Usuario;
    idEspacio: string;
    dias: Array<Dia>;
}
