import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('Bienvenido al sistema');
        this.router.navigate(['/usuarios']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    this.router.navigate(['/login']);
  }
}