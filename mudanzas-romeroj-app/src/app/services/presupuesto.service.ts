import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presupuesto } from '../types/Presupuesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PresupuestoService {
  constructor(private http: HttpClient) {}

  enviarPresupuesto(datos: Presupuesto): Observable<any> {
    return this.http.post("/api/email", datos); 
  }
}

