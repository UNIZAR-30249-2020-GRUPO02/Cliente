import {Equipamiento} from "./equipamiento";

export class BusquedaDTO {
    edificio: string;
    tipoEspacio: string;
    equipamiento: Array<Equipamiento>;
    capacidad: number;
}
