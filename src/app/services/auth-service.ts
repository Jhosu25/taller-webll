import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);

  // ✅ Endpoint de login en Spring Boot
  private API_LOGIN = 'http://localhost:8080/login';

  // Signal que indica si hay sesión activa
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  // Signal con el rol del usuario logueado
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, contrasenia: string): Observable<boolean> {
    // POST /login — Spring Boot devuelve { token, email, rol }
    return this.http.post<LoginResponse>(this.API_LOGIN, { email, password: contrasenia }).pipe(
      map(response => {
        if (response && response.token) {
          // Guardamos el JWT token para enviarlo en cada petición protegida
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', response.email);
          localStorage.setItem('rol', response.rol);

          this.rolActual.set(response.rol);
          this.sesionIniciada.set(true);

          return true;
        }
        return false;
      })
    );
  }

  // Devuelve el token JWT guardado (para adjuntarlo en peticiones protegidas)
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
  }
}