import { Departamento } from "./departamento";
import { Propietarios } from "./propietarios.model";

export class Mascotas {
    codmascota?: number;
    nombremascota?: string;
    edad?: number;
    raza?: string;
    codpropietario?: Propietarios;
}
