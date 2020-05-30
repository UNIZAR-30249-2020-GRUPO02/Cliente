import {Equipamiento} from "./equipamiento";

export class DatosDTO {
    id: string;
    equipamiento: Array<Equipamiento>;
    capacidad: number;
    reservable: boolean;
    notas: string;
}
