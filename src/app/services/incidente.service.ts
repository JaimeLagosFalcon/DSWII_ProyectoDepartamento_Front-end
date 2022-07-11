import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Incidente } from '../models/incidente.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8055/rest/incidente'

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private http:HttpClient) { }

  create(data:Incidente):Observable<any>{
    return this.http.post(baseUrl, data);
  }

}
