import { Time } from "@angular/common";
import { Departamento } from "./departamento";
import { Usuario } from "./usuario.model";

export class Propietarios {
    codpropietario?: number;
    dni?: number;
    nombre?: string;
    primerapellido?: string;
    segundoapellido?: string;
    telefono?: string;
    celular?: string;
    fecharegistro?: Date;
    horaregistro?: Time;
    estado?: boolean;
    idUsuario?: Usuario;
    coddepartamento?: Departamento
}
