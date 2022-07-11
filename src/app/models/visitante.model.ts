import { Propietarios } from "./propietarios.model";
import { Usuario } from "./usuario.model";

export class Visitante {
    codvisitantes?: number;
    dni?: string;
    nombrevisitante?: string;
    idUsuario?: Usuario;
    codpropietario?: Propietarios
}
