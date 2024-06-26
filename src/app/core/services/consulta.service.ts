import { Injectable, inject } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Consulta_endpoints } from './enpointsConsulta';
import { Observable, interval, switchMap } from 'rxjs';
import { respuestaClienteAPI } from '../models/interfaceConsulta';
import { environment } from '../../environment/environment';
import { respuestaAlquilerAPI } from '../models/interfaceAlquiler';

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
  VerAlquiler(): Observable<HttpResponse<respuestaAlquilerAPI>> {
    let peticion = `${this.urlApi}${this.endpoints.getAlquiler}`;
    return this.http.get<respuestaAlquilerAPI>(peticion, { observe: 'response' });
  }
  getAlquileres(): Observable<any> {
    return interval(60000) // Intervalo de 1 minuto
      .pipe(
        switchMap(() => this.http.get<any>('https://localhost:7023/api/Alquiler/consultaAlquiler'))
      );
  }
}
