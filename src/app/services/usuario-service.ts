import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  // ✅ El token JWT se adjunta automáticamente por el authInterceptor
  private API_USUARIOS = 'http://localhost:8080/usuarios';

  // GET /usuarios — requiere ROLE_ADMIN
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_USUARIOS);
  }

  // GET /usuarios/:id — requiere ROLE_ADMIN
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_USUARIOS}/${id}`);
  }

  // POST /usuarios/registerUser — público (permitAll en SecurityConfig)
  postUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_USUARIOS}/registerUser`, usuario);
  }

  // PUT /usuarios/:id — requiere ROLE_ADMIN
  putUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_USUARIOS}/${id}`, usuario);
  }

  // DELETE /usuarios/:id — requiere ROLE_ADMIN
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_USUARIOS}/${id}`);
  }
}