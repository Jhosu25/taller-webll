import { Component } from '@angular/core';
import { DetalleVinilo } from "../detalle-vinilo/detalle-vinilo";
import { Vinilo } from '../../models/vinilo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultas',
  imports: [DetalleVinilo, CommonModule],
  templateUrl: './consultas.html',
  styleUrls: ['./consultas.css'],
})
export class Consultas {

  vinilos = [
    {
      id: "1",
      titulo: "Abbey Road",
      artista: "The Beatles",
      anio: 1969,
      precio: 34.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQxNG3tuojykyLQySoiLmUEuUzIIHsWvSWw&s",
      generos: ["Rock", "Pop"],
      formato: "LP 12\"",
      label: "Apple Records",
      condicion: "Nuevo",
      stock: 15,
      disponible: true
    },
    {
      id: "2",
      titulo: "The Dark Side of the Moon",
      artista: "Pink Floyd",
      anio: 1973,
      precio: 39.99,
      precioOriginal: 49.99,
      imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      generos: ["Rock", "Progressive"],
      formato: "LP 12\"",
      label: "Harvest Records",
      condicion: "Sellado",
      stock: 0,
      disponible: true
    },
    {
      id: "3",
      titulo: "Kind of Blue",
      artista: "Miles Davis",
      anio: 1959,
      precio: 29.99,
      imagen: "https://planarteria.com/wp-content/uploads/2023/09/Miles_Davis_Kind_of_Blue.jpg",
      generos: ["Jazz"],
      formato: "LP 12\"",
      label: "Columbia",
      condicion: "Nuevo",
      stock: 12,
      disponible: true
    },
    {
      id: "4",
      titulo: "Thriller",
      artista: "Michael Jackson",
      anio: 1982,
      precio: 44.99,
      imagen: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
      generos: ["Pop", "Soul"],
      formato: "LP 12\"",
      label: "Epic Records",
      condicion: "Nuevo",
      stock: 0,
      disponible: true
    },
    {
      id: "5",
      titulo: "Rumours",
      artista: "Fleetwood Mac",
      anio: 1977,
      precio: 32.99,
      imagen: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      generos: ["Rock", "Pop"],
      formato: "LP 12\"",
      label: "Warner Bros.",
      condicion: "Nuevo",
      stock: 1,
      disponible: false
    },
    {
      id: "6",
      titulo: "Led Zeppelin IV",
      artista: "Led Zeppelin",
      anio: 1971,
      precio: 36.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-4GT9Ycl3axHGOdf2VHzfrODclzCN0JGmw&s",
      generos: ["Rock", "Hard Rock"],
      formato: "LP 12\"",
      label: "Atlantic",
      condicion: "Usado - Excelente",
      stock: 4,
      disponible: true
    },
    {
      id: "7",
      titulo: "Back in Black",
      artista: "AC/DC",
      anio: 1980,
      precio: 33.99,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png",
      generos: ["Rock", "Hard Rock"],
      formato: "LP 12\"",
      label: "Atlantic",
      condicion: "Nuevo",
      stock: 10,
      disponible: true
    },
    {
      id: "8",
      titulo: "What's Going On",
      artista: "Marvin Gaye",
      anio: 1971,
      precio: 28.99,
      imagen: "https://m.media-amazon.com/images/I/81InYXq1VDL._UF1000,1000_QL80_.jpg",
      generos: ["Soul", "Funk"],
      formato: "LP 12\"",
      label: "Tamla",
      condicion: "Nuevo",
      stock: 7,
      disponible: false
    },
    {
      id: "9",
      titulo: "The Velvet Underground & Nico",
      artista: "The Velvet Underground",
      anio: 1967,
      precio: 41.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcl66fL4vsHTRoV7OYj7u2OyHfdP9Q7YJgQ&s",
      generos: ["Rock", "Experimental"],
      formato: "LP 12\"",
      label: "Verve",
      condicion: "Sellado",
      stock: 3,
      disponible: true
    }
  ];

  viniloSeleccionado: Vinilo | null = null;

  mensajeAviso: string = '';

  // Selecciona un vinilo para mostrar detalles
  verDetalles(vinilo: Vinilo){
    this.viniloSeleccionado = vinilo;
  }

  // Gestiona la notificación que viene del hijo
  procesarAviso(mensaje: string){
    this.mensajeAviso = mensaje;
  }

}
