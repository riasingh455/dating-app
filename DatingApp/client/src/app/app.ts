import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav.js";
import { AccountService } from '../core/services/account-service.js';
import { Home } from '../features/home/home.js';
import { User } from '../types/user.js';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected readonly title = "Dating App";
  protected members = signal<User[]>([])

  async ngOnInit(){
    this.members.set(await this.getMembers());
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get<User[]>("https://localhost:5001/api/members"));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
