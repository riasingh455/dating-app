import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav.js";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  public router = inject(Router);
}
