import {EstadoReserva} from "./estado-reserva.enum"
import {Usuario} from "./usuario"
import {Dia} from "./dia.enum"

export class ReservaDTO {
    id: string;
    horaInicio: number;
    horaFin: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: String;
    usuario: Usuario;
    idEspacio: string;
    dias: Array<Dia>;
}
