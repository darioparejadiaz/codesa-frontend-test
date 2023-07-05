//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Guard definition

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(private router: Router, private loginService: LoginService) {}

  //************************************************ */
  //************************************************ */
  // Methods

  canActivate(): boolean {
    const isAuthenticated = this.loginService.getLoginState();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
