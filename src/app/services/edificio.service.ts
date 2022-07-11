import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../models/edificio.model';


const baseURL= "http://localhost:8055/rest/util/edificio";

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http : HttpClient) { }

 listaEdificio():Observable<Edificio[]>{
   return this.http.get<Edificio[]>(baseURL);
 }

}
