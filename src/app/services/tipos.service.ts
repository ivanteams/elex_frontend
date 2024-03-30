// ELEX: SpringBoot3.2 + Angular17.3 -> Paso3: Servicio
// Comando: ng generate service services/tipos

import { Injectable } from '@angular/core';

// Importaciones adicionales propios
import { Tipos } from '../models/tipos.model';
import { environment } from '../../environments/environment.development';

// Importaciones adicionales de librerias Angular
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposService {
  // Atributo con la raiz de los endpoints
  private baseURL = `${environment.apiURL}/tipos_expediente`;

  // En el constructor inyecto el HttpClient para gestionar endpoints
  constructor(private http: HttpClient) {}

  // Insertar tipos
  // @PostMapping("/insertar/{materia}")
  insertarTipo(materia: string): Observable<Tipos> {
    const url = `${this.baseURL}/insertar/${materia}`;
    return this.http.post<Tipos>(url, {}); // {} body, siempre vacio
  }

  // Consultar tipos
  // @GetMapping("/consultar")
  consultarTipos(): Observable<Tipos[]> {
    const url = `${this.baseURL}/consultar`;
    return this.http.get<Tipos[]>(url);
  }

  // ----------------------------------------
  // NUEVO! ACTUALIZAR Y BORRAR
  // Paso1: Modificar el Servicio
  // ----------------------------------------

  // Actualizar tipos
  // @PutMapping("/actualizar/{id}/{materia}")
  actualizarTipo(id: number, materia: string): Observable<Tipos> {
    const url = `${this.baseURL}/actualizar/${id}/${materia}`;
    return this.http.put<Tipos>(url, {});
  }

  // Borrar tipos
  // @DeleteMapping("/borrar/{id}")
  borrarTipo(id: number): Observable<void> {
    const url = `${this.baseURL}/borrar/${id}`;
    return this.http.delete<void>(url);
  }
}
