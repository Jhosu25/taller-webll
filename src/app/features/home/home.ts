import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Ofertas } from "../ofertas/ofertas";
import { ProductCard } from "../../shared/product-card/product-card";
import { Consultas } from '../../shared/consultas/consultas';
import { Acerca } from "../acerca/acerca";

@Component({
  selector: 'app-home',
  imports: [Hero, Ofertas, ProductCard, Consultas, Acerca],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
