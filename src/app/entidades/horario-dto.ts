export class HorarioDTO {
    idEspacio: string;
    dia: Date;
    horaInicio: number;
    horaFin: number;
    horasOcupadas: Array<number>;
}
