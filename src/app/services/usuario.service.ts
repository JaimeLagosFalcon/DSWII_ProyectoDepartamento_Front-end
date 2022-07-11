import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Usuario } from '../models/usuario.model';


const baseURL= "http://localhost:8055/rest/util/usuario";

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlUsuario= AppSettings.API_ENDPOINT+ '/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  
  RegistraUsuario(data:Usuario):Observable<any>{
    return this.http.post(baseUrlUsuario, data);
  }
  listaUsuario():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(baseURL);
  }
}
