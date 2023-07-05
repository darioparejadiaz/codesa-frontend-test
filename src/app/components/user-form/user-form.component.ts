//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {} from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Component definition

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  //************************************************ */
  //************************************************ */
  // Props

  userForm: FormGroup;
  @Output() hideForm = new EventEmitter<boolean>();
  private usersSubscription$!: Subscription;
  editMode: boolean = false;
  editedUserId!: number;

  //************************************************ */
  //************************************************ */
  // Constructor

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.userForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role: ['user'],
    });
  }

  //************************************************ */
  //************************************************ */
  // Life Cycle Hooks

  ngOnInit(): void {
    this.usersSubscription$ = this.usersService.editUserFound$.subscribe(
      (user) => {
        this.userForm.get('name')?.setValue(user.name);
        this.userForm.get('lastName')?.setValue(user.lastName);
        this.userForm.get('email')?.setValue(user.email);
        this.userForm.get('phone')?.setValue(user.phone);
        this.userForm.get('address')?.setValue(user.address);
        this.editMode = true;
        this.editedUserId = user.id;
      }
    );
  }

  //*************** */

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }

  //************************************************ */
  //************************************************ */
  // Event Handlers

  onSaveUser() {
    if (!this.editMode) {
      this.userForm.markAllAsTouched();
      if (this.userForm.valid) {
        this.usersService.addUser(this.userForm.value);
        this.hideForm.emit(true);
      }
    } else {
      this.usersService.editUserById(this.editedUserId, this.userForm.value);
      this.editMode = false;
      this.hideForm.emit(true);
    }
  }

  //*************** */

  onHideForm() {
    this.hideForm.emit(true);
  }

  //************************************************ */
  //************************************************ */
  // Methods

  getName() {
    return this.userForm.get('name');
  }

  //*************** */

  getLastName() {
    return this.userForm.get('lastName');
  }

  //*************** */

  getEmail() {
    return this.userForm.get('email');
  }

  //*************** */

  getPhone() {
    return this.userForm.get('phone');
  }

  //*************** */

  getAddress() {
    return this.userForm.get('address');
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
