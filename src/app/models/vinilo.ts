export interface Vinilo {
  id: string;
  titulo: string;
  artista: string;
  anio: number;
  precio: number;
  imagen: string;
  generos: string[];
  formato: string;
  label: string;
  condicion: string;
  stock: number;
  disponible: boolean;
  precioOriginal?: number; // opcional porque no todos lo tienen
}
