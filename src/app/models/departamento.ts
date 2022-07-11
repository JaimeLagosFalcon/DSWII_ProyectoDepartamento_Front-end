import { Edificio } from "./edificio.model";
import { Usuario } from "./usuario.model";

export class Departamento {
    coddepartamento?: number;
    numdepartamento?: string;
    fechaentrega?: Date;
    precio?: number;
    nropiso?: number;
    codedificio?: Edificio;
    idUsuario?: Usuario
}
