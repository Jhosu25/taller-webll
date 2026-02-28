import { Component, inject, signal, OnInit } from '@angular/core';
import { ViniloService } from '../../services/vinilo-service';
import { Vinilo } from '../../models/vinilo-forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-formulario-vinilo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class FormularioVinilo implements OnInit {

  private servicioVinilo = inject(ViniloService);
  public servicioAuth = inject(AuthService);

  listaVinilos = signal<Vinilo[]>([]);

  idEnEdicion: number | null = null;

  // ✅ Campos exactos que acepta la API (sin imagen, generos, etc.)
  nuevoVinilo: Omit<Vinilo, 'id'> = {
    titulo: '',
    artista: '',
    anio: String(new Date().getFullYear()), // anio es String en la API
    precio: 0,
    stock: 0,
  };

  editando = false;

  ngOnInit() {
    this.obtenerVinilos();
  }

  obtenerVinilos() {
    this.servicioVinilo.getVinilos().subscribe((datos) => {
      this.listaVinilos.set(datos);
    });
  }

  guardarVinilo() {
    if (this.editando && this.idEnEdicion !== null) {
      const viniloActualizado: Vinilo = { id: this.idEnEdicion, ...this.nuevoVinilo };
      this.servicioVinilo.putVinilo(this.idEnEdicion, viniloActualizado).subscribe(() => {
        this.obtenerVinilos();
        this.resetear();
      });
    } else {
      // POST — Spring Boot genera el id automáticamente con @GeneratedValue
      this.servicioVinilo.postVinilo(this.nuevoVinilo as Vinilo).subscribe(() => {
        this.obtenerVinilos();
        this.resetear();
      });
    }
  }

  eliminarVinilo(id: number) {
    if (confirm('¿Desea eliminar este vinilo?')) {
      this.servicioVinilo.deleteVinilo(id).subscribe(() => {
        this.obtenerVinilos();
      });
    }
  }

  seleccionarParaEditar(vinilo: Vinilo) {
    this.editando = true;
    this.idEnEdicion = vinilo.id!;
    this.nuevoVinilo = {
      titulo: vinilo.titulo,
      artista: vinilo.artista,
      anio: vinilo.anio,
      precio: vinilo.precio,
      stock: vinilo.stock,
    };
  }

  resetear() {
    this.editando = false;
    this.idEnEdicion = null;
    this.nuevoVinilo = {
      titulo: '',
      artista: '',
      anio: String(new Date().getFullYear()),
      precio: 0,
      stock: 0,
    };
  }
}