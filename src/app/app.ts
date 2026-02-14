import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Hero } from './shared/hero/hero';
import { Home } from "./features/home/home";
import { Footer } from "./shared/footer/footer";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [NavBar, Hero, Home, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }
  
}

