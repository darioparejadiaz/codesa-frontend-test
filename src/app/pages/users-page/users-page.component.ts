//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Component definition

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  //************************************************ */
  //************************************************ */
  // Props

  displayForm: boolean = false;
  usersSubscription$!: Subscription;
  showAddUserBtn: boolean = true;

  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(
    private router: Router,
    private loginService: LoginService,
    private usersService: UsersService
  ) {}

  //************************************************ */
  //************************************************ */
  // Life Cycle Hooks

  ngOnInit(): void {
    this.usersSubscription$ = this.usersService.editUser$.subscribe(() => {
      this.displayForm = true;
      this.showAddUserBtn = false;
    });
  }

  //*************** */

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }

  //************************************************ */
  //************************************************ */
  // Event Handlers

  onLogOut() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  //*************** */

  onDisplayForm(event: boolean) {
    this.displayForm = event;
    this.showAddUserBtn = false;
  }

  //*************** */

  onHideForm(event: boolean) {
    this.displayForm = !event;
    this.showAddUserBtn = true;
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
