import { Time } from "@angular/common";
import { Departamento } from "./departamento";
import { Usuario } from "./usuario.model";
import { Visitante } from "./visitante.model";

export class Visita {
    codvisita?: number;
    fechavisita?: Date;
    horavisita?: Time;
    horasalida?: Time;
    comentario?: string;
    estado?: number;
    coddepartamento?: Departamento;
    idUsuario?: Usuario;
    codvisitantes? : Visitante;
}
