import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo.model';


const baseUrl = "http://localhost:8055/rest/util/";
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private hhtp:HttpClient) { }

  listaDepartamento():Observable<string[]>{
      return this.hhtp.get<string[]>(baseUrl+"listaDepartamentos");
  }

  listaProvincia(departamento:any):Observable<string[]>{
      return this.hhtp.get<string[]>(baseUrl+"listaProvincias/"+departamento);
  }

  listaDistrito(departamento:any, provincia:any):Observable<Ubigeo[]>{
    return this.hhtp.get<Ubigeo[]>(baseUrl+"listaDistritos/"+departamento+"/"+provincia);
  }

}
