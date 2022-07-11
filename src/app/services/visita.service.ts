import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from '../models/visita.model';

// Controlador Visita
const baseUrl = 'http://localhost:8055/rest/visita'

// Controlador de Visitante para traer el metodo de BuscarXDni
const baseUrl2 = 'http://localhost:8055/rest/visitante'


@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http:HttpClient) { }

  create(data:Visita):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  actualiza(data:Visita):Observable<any>{
    return this.http.put(baseUrl, data);
  }
  
  listaVisitante(dni:string):Observable<any>{
    const params = new HttpParams().set("dni", dni);
    return this.http.get(baseUrl2 + "/listaVisitanteConParametros", {params});
  }
  
  listaVisita(codvisitantes:number, coddepartamento:number, estado:number):Observable<any>{
    const params = new HttpParams().set("codvisitantes", codvisitantes).set("coddepartamento", coddepartamento).set("estado", estado);
    return this.http.get<any>(baseUrl + "/listaVisitaConParametros", {params});
  }
}
