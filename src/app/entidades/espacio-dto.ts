export class EspacioDTO {
    id: string;
    tipo: string;
    capacidad: number;
    equipamiento: Array<Equipamiento>;
    ubicacion: Ubicacion;
    notas: string;
}
