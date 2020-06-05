import {Equipamiento} from "./equipamiento"
import {Ubicacion} from "./ubicacion"

export class EspacioDTO {
    id: string;
    nombre: string;
    tipo: string;
    capacidad: number;
    equipamiento: Array<Equipamiento>;
    ubicacion: Ubicacion;
    notas: string;
    reservable: boolean;
    geom: string;
}
