import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { UsuarioService } from '../../services/usuario-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class Formulario {
[x: string]: any;

  private servicioUsuario = inject(UsuarioService);

  public servicioAuth = inject(AuthService);

  //Lista de usuarios reactiva
  listaUsuarios = signal<Usuario[]>([]);

  //Objeto del usuario que se va a guardar, vincular con el formulario
  nuevoUsuario:Usuario={
    name:'',
    email:'',
    phone:'',
    password:'',
    rol:'EMPLEADO'
  };

  //Variable para controlar la etiqueta del boton registro
  editando=false;

  //Método obtenerUsuarios
  obtenerUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe(datosUsuarios=>{
      this.listaUsuarios.set(datosUsuarios)
    });
  }

    ngOnInit(){
    this.servicioUsuario.getUsuarios().subscribe(datosUsuarios=>{
      this.listaUsuarios.set(datosUsuarios);
    })
  }

  //Método eliminarUsuario
  eliminarUsuario(id:string){
    //CONFIRM alerta que viene del navegador y sirve para preguntarle al usuario si quiere eliminar el registro
    if(confirm('Desea eliminar el registro')){
      this.servicioUsuario.deleteUsuario(id).subscribe(()=>{
        //Filtrar el usuario para eliminar de la tabla
        //this.listaUsuarios.set(this.listaUsuarios().filter(u=>u.id !== id));
        this.obtenerUsuarios();
      })
    }
  }

  //Metodo para pasar los datos del usuario que quiero editar al formulario
  seleccionarParaEditar(user:Usuario){
    this.editando=true;
    this.nuevoUsuario={...user};
  }

  //Método guardarUsuario
  guardarUsuario(){
    if(this.editando && this.nuevoUsuario.id){
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(()=>{
        this.obtenerUsuarios();
        this.resetear();
      });
    }else{
    this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(( )=>{
      this.obtenerUsuarios();
      this.resetear();
    })
  }
}

//Método para limpiar el formulario
resetear(){
  this.editando=false;
  this.nuevoUsuario={name:'', email:'', phone:'', password:'', rol:'EMPLEADO'};
}

}
