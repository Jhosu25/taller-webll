import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Vinilo } from '../models/vinilo-forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViniloService {

  private http = inject(HttpClient);

  // ✅ Apunta a tu API de Spring Boot
  private API_VINILOS = 'http://localhost:8080/vinilos';

  // GET — obtener todos los vinilos
  getVinilos(): Observable<Vinilo[]> {
    return this.http.get<Vinilo[]>(this.API_VINILOS);
  }

  // GET por ID
  getViniloById(id: number): Observable<Vinilo> {
    return this.http.get<Vinilo>(`${this.API_VINILOS}/${id}`);
  }

  // POST — registrar nuevo vinilo
  postVinilo(vinilo: Vinilo): Observable<Vinilo> {
    return this.http.post<Vinilo>(this.API_VINILOS, vinilo);
  }

  // PUT — actualizar vinilo existente
  putVinilo(id: number, vinilo: Vinilo): Observable<Vinilo> {
    return this.http.put<Vinilo>(`${this.API_VINILOS}/${id}`, vinilo);
  }

  // DELETE — eliminar vinilo
  deleteVinilo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_VINILOS}/${id}`);
  }
}