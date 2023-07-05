//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Component definition

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  //************************************************ */
  //************************************************ */
  // Props

  users!: User[];
  usersSubscription!: Subscription;
  editUserSubscription$!: Subscription;
  // showAddUserBtn: boolean = true;

  @Input() showAddUserBtn: boolean = true;
  @Output() displayForm = new EventEmitter<boolean>();

  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(private usersService: UsersService) {}

  //************************************************ */
  //************************************************ */
  // Life cycle Hooks

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersSubscription = this.usersService.users$.subscribe((users) => {
      this.users = users;
    });
    this.editUserSubscription$ = this.usersService.editUser$.subscribe(() => {
      this.showAddUserBtn = false;
    });
  }

  //*************** */

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.editUserSubscription$.unsubscribe();
  }

  //************************************************ */
  //************************************************ */
  // Event Handlers

  onDisplayForm() {
    this.displayForm.emit(true);
    this.showAddUserBtn = false;
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
