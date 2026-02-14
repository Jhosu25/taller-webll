import { Component } from '@angular/core';
import { Consultas } from "../../shared/consultas/consultas";
import { FormularioVinilo } from "../../shared/formulario/formulario";

@Component({
  selector: 'app-usuarios',
  imports: [Consultas, FormularioVinilo],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

}
