//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Component definition

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //************************************************ */
  //************************************************ */
  // Props

  loginForm: FormGroup;
  incorrectCredentialsStatus: boolean = false;

  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
    });
  }

  //************************************************ */
  //************************************************ */
  // LifeCycle Hooks

  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');
    if (userName && password) {
      this.loginService.logIn(userName, password);
      const isLoggedIn = this.loginService.getLoginState();
      if (isLoggedIn) {
        this.router.navigate(['/users']);
      }
    }
  }

  //************************************************ */
  //************************************************ */
  // Event Handlers

  onLogin() {
    this.loginService.logIn(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    const isLoggedIn = this.loginService.getLoginState();

    if (isLoggedIn) {
      this.loginForm.reset();
      this.router.navigate(['/users']);
    } else {
      this.incorrectCredentialsStatus = true;
    }
  }

  //************************************************ */
  //************************************************ */
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
