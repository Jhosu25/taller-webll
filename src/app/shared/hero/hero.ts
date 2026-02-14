import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //Informacion recibida del componente padre
  @Input() titulo!:string;
  @Input() video!:string;
  @Input() subtitulo!:string;
}
