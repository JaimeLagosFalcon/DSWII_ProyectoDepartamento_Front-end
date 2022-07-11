import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Departamento } from '../models/departamento';
import { Observable } from 'rxjs';

// Controlador Departamento
const baseUrl = 'http://localhost:8055/rest/departamento'

// Controlador Utils
const baseURL2= "http://localhost:8055/rest/util/departamento";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  create(data:Departamento):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  listaDepartamento():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(baseURL2);
  }

}
