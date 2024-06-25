import { Injectable, inject } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Consulta_endpoints } from './enpointsConsulta';
import { Observable } from 'rxjs';
import { respuestaClienteAPI } from '../models/interfaceConsulta';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  urlApi = environment.apiUrl
  endpoints = Consulta_endpoints;
  constructor(private http: HttpClient) {}

  VerConsulta(): Observable<HttpResponse<respuestaClienteAPI>> {
    let peticion = `${this.urlApi}${this.endpoints.getConsula}`;
    return this.http.get<respuestaClienteAPI>(peticion, { observe: 'response' });
  }
}
