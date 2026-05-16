import { Component, Input, signal } from '@angular/core';
import { Register } from "../account/register/register.js";
import { User } from '../../types/user.js';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected registerMode = signal(false);

  showRegister(value: boolean){
    this.registerMode.set(value);
  }
}
