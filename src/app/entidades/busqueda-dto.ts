import {Equipamiento} from "./equipamiento";
import {Dia} from "./dia.enum";

export class BusquedaDTO {
    edificio: string;
    tipoEspacio: string;
    equipamiento: Array<Equipamiento>;
    capacidad: number;
    fechaInicio: Date;
    fechaFin: Date;
    horaInicio: number;
    horaFin: number;
    dias: Array<Dia>;
    periodo: boolean;
}
