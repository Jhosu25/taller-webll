import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas {
  
  ofertasDestacadas = [
    {
      id: 2,
      titulo: "The Dark Side of the Moon",
      artista: "Pink Floyd",
      año: 1973,
      precio: 39.99,
      precioOriginal: 49.99,
      descuento: 20,
      imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      generos: ["Rock", "Progressive"],
      stock: 8,
      disponible: true
    },
    {
      id: 10,
      titulo: "Blue Train",
      artista: "John Coltrane",
      año: 1957,
      precio: 24.99,
      precioOriginal: 34.99,
      descuento: 29,
      imagen: "https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg",
      generos: ["Jazz"],
      stock: 5,
      disponible: true
    },
    {
      id: 11,
      titulo: "Random Access Memories",
      artista: "Daft Punk",
      año: 2013,
      precio: 35.99,
      precioOriginal: 45.99,
      descuento: 22,
      imagen: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
      generos: ["Electronic", "Disco"],
      stock: 12,
      disponible: true
    },
    {
      id: 12,
      titulo: "Hotel California",
      artista: "Eagles",
      año: 1976,
      precio: 29.99,
      precioOriginal: 39.99,
      descuento: 25,
      imagen: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
      generos: ["Rock"],
      stock: 6,
      disponible: true
    }
  ];

  ofertas2x1 = [
    {
      titulo: "Clásicos del Rock",
      descripcion: "Lleva 2 vinilos de rock clásico por el precio de 1",
      imagen: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=600",
      badge: "2x1"
    },
    {
      titulo: "Jazz Essentials",
      descripcion: "Compra 2 álbumes de jazz y obtén el segundo gratis",
      imagen: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600",
      badge: "2x1"
    }
  ];
}