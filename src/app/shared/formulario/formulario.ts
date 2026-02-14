import { Component, inject, signal } from '@angular/core';
import { ViniloService } from '../../services/vinilo-service';
import { Vinilo } from '../../models/vinilo';
import { ViniloForm } from '../../models/vinilo-forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-vinilo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class FormularioVinilo {

  private servicioVinilo = inject(ViniloService);

  listaVinilos = signal<Vinilo[]>([]);

  // Guardamos el id aparte cuando editamos
  idEnEdicion: string | null = null;

  nuevoVinilo: ViniloForm = {
    titulo: '',
    artista: '',
    anio: new Date().getFullYear(),
    precio: 0,
    stock: 0,
    disponible: true,
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

    const viniloCompleto: Vinilo = {
      id: this.idEnEdicion ?? crypto.randomUUID(),
      imagen: '',
      generos: [],
      formato: '',
      label: '',
      condicion: '',
      precioOriginal: undefined,
      ...this.nuevoVinilo
    };

    if (this.editando && this.idEnEdicion) {
      this.servicioVinilo.putVinilo(this.idEnEdicion, viniloCompleto)
        .subscribe(() => {
          this.obtenerVinilos();
          this.resetear();
        });
    } else {
      this.servicioVinilo.postVinilo(viniloCompleto)
        .subscribe(() => {
          this.obtenerVinilos();
          this.resetear();
        });
    }
  }

  eliminarVinilo(id: string ) {
    if (confirm('¿Desea eliminar este vinilo?')) {
      this.servicioVinilo.deleteVinilo(id).subscribe(() => {
        this.obtenerVinilos();
      });
    }
  }

  seleccionarParaEditar(vinilo: Vinilo) {
    this.editando = true;
    this.idEnEdicion = vinilo.id;

    this.nuevoVinilo = {
      titulo: vinilo.titulo,
      artista: vinilo.artista,
      anio: vinilo.anio,
      precio: vinilo.precio,
      stock: vinilo.stock,
      disponible: vinilo.disponible,
    };
  }

  resetear() {
    this.editando = false;
    this.idEnEdicion = null;

    this.nuevoVinilo = {
      titulo: '',
      artista: '',
      anio: new Date().getFullYear(),
      precio: 0,
      stock: 0,
      disponible: true,
    };
  }
}
