import { Time } from "@angular/common";
import { Usuario } from "./usuario.model";

export class Incidente {

    codincidente?: number;
    hora?: Time;
    descripcion?: string;
    estado?: Boolean;
    fechaAtencion?: Date;
    fechaRegistro?: Date;
    idUsuario?: Usuario;


}
