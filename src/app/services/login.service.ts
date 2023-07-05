//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AdminUser } from '../models/user.model';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Service definition

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //************************************************ */
  //************************************************ */
  // Props

  private isLoggedIn: boolean = false;

  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(private usersService: UsersService) {}

  //************************************************ */
  //************************************************ */
  // Methods

  getLoginState(): boolean {
    return this.isLoggedIn;
  }

  //*************** */

  logIn(userName: string, password: string): void {
    const adminUsers: AdminUser[] = this.usersService.getAdminUsers();
    const user = adminUsers.find(
      (adminUser) => adminUser.userName === userName
    );

    if (user?.password === password) {
      this.isLoggedIn = true;
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
    }
  }

  //*************** */

  logOut(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
