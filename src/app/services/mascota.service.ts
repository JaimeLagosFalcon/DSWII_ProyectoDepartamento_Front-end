import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascotas } from '../models/mascotas.model';

// Controlador Mascota
const baseUrl = 'http://localhost:8055/rest/mascota'

const baseURL2= "http://localhost:8055/rest/mascota/ListaMascota";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }


  create(data:Mascotas):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  listaMascota():Observable<any>{
    return this.http.get<any>(baseURL2)
  }

}
