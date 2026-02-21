import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  private servicioUsuario = inject(UsuarioService);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  registrado = false;

  guardarUsuario() {
    this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
      this.resetear();
      this.registrado = true; // opcional: mostrar mensaje de éxito
    });
  }

  resetear() {
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' };
  }

}
