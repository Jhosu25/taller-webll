import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario-service';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  private servicioUsuario = inject(UsuarioService);
  private router = inject(Router);

  // ✅ nombre (no name), rol con prefijo ROLE_
  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    phone: '',
    password: '',
    rol: 'ROLE_EMPLEADO'
  };

  registrar() {
    this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
      alert('Usuario registrado correctamente');
      this.router.navigate(['/login']);
    });
  }

  // ✅ nombre (no name), rol con prefijo ROLE_
  resetear() {
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      phone: '',
      password: '',
      rol: 'ROLE_EMPLEADO'
    };
  }
}