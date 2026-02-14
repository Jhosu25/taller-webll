import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  anio: number = new Date().getFullYear();

  logoUrl: string ="/images/disco.svg";

  enlaces = [
    {nombre:'Home', link: '#'},
    {nombre:'Acerca', link: '#'},
    {nombre:'Cátalogo', link: '#'},
    {nombre:'Ofertas', link: '#'},
    {nombre:'Nosotros', link: '#'},
    {nombre:'Contacto', link: '#'}
  ]

}
