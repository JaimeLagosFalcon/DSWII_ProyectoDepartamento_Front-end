import { Ubigeo } from "./ubigeo.model";

export class Usuario {
    idUsuario?: number;
    dni?: string;
    nombre?: string;
    primerapellido?: string;
    segundoapellido?: string;
    telefono?: string;
    celular?: string;
    direccion?: string;
    correo?: string;
    password?: string;
    fechareg?: Date;
    idUbigeo?: Ubigeo;
    login?: string;
    estado?: boolean
}
