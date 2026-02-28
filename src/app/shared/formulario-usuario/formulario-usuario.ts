import { Component, inject, signal, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { UsuarioService } from '../../services/usuario-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class Formulario implements OnInit {

  private servicioUsuario = inject(UsuarioService);
  public servicioAuth = inject(AuthService);

  // Lista de usuarios reactiva
  listaUsuarios = signal<Usuario[]>([]);

  // ✅ Campos corregidos: "nombre" (no "name"), id como number, rol con prefijo ROLE_
  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    phone: '',
    password: '',
    rol: 'ROLE_EMPLEADO'
  };

  editando = false;

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(datosUsuarios => {
      this.listaUsuarios.set(datosUsuarios);
    });
  }

  // ✅ id como number (Long en Spring Boot)
  eliminarUsuario(id: number) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      // ✅ id como number
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    } else {
      // POST /usuarios/registerUser
      this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      phone: '',
      password: '',
      rol: 'ROLE_EMPLEADO'
    };
  }
}