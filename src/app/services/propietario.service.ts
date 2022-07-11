import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietarios } from '../models/propietarios.model';

// Controlador Propietario
const baseUrl = 'http://localhost:8055/rest/propietario'

// Controlador Utils
const baseURL2= "http://localhost:8055/rest/util/propietario";

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http:HttpClient) { }

  
  create(data:Propietarios):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  listaPropietario():Observable<Propietarios[]>{
    return this.http.get<Propietarios[]>(baseURL2);
  }

}
