import {EstadoReserva} from "./estado-reserva.enum"
import {Usuario} from "./usuario"
import {Dia} from "./dia.enum"

export class ReservaDTO {
    horaInicio: Date;
    horaFin: Date;
    fechaInicio: Date;
    fechaFin: Date;
    estado: String;
    usuario: Usuario;
    idEspacio: string;
    dias: Array<Dia>;
}
