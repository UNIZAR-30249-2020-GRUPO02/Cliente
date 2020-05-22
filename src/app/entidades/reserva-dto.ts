import {EstadoReserva} from "./estado-reserva.enum"
import {Usuario} from "./usuario"
import {Dia} from "./dia.enum"

export class ReservaDTO {
    id: string;
    horaInicio: Date;
    horaFin: Date;
    fechaInicio: Date;
    fechaFin: Date;
    estado: EstadoReserva;
    user: Usuario;
    idEspacio: string;
    dias: Array<Dia>;
}
