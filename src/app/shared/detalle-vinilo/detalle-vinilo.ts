import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vinilo } from '../../models/vinilo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalle-vinilo',
  imports: [CommonModule],
  templateUrl: './detalle-vinilo.html',
  styleUrls: ['./detalle-vinilo.css'],
})
export class DetalleVinilo {

  @Input() vinilo!: Vinilo;
  @Output() notificarAccion = new EventEmitter<string>();

  avisarCompra(): void {
    if(this.vinilo){
      this.notificarAccion.emit(`¡Has seleccionado el vinilo "${this.vinilo.titulo}" de ${this.vinilo.artista}!`);
    }
  }

}
