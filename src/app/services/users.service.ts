//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Imports

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminUser, User, FormUser } from '../models/user.model';

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
// Service definition

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //************************************************ */
  //************************************************ */
  // Data

  private adminUsers: AdminUser[] = [
    {
      id: 1,
      name: 'Dario',
      lastName: 'Pareja',
      email: 'dev.dario@codesa.com.co',
      phone: 3185007179,
      address: 'Cra 64 A # 14-28',
      role: 'admin',
      userName: 'darioparejadiaz',
      password: 'admin1234',
    },
  ];

  private users: User[] = [
    {
      id: 1,
      name: 'Yusselnis',
      lastName: 'Perez',
      email: 'yusselnis.perez@codesa.com.co',
      phone: 3135458947,
      address: 'Calle 123 # 45-67',
      role: 'user',
    },
    {
      id: 2,
      name: 'Monica',
      lastName: 'Tamara',
      email: 'monica.tamara@codesa.com.co',
      phone: 3101236547,
      address: 'Cra 789 # 12-34',
      role: 'user',
    },
    {
      id: 3,
      name: 'Fernando',
      lastName: 'Lopez',
      email: ' fernando.lopez@codesa.com.co',
      phone: 3201459632,
      address: 'Diag 741 # 96-32',
      role: 'user',
    },
  ];

  //************************************************ */
  //************************************************ */
  // Props

  users$ = new Subject<User[]>();
  adminUsers$ = new Subject<AdminUser[]>();
  editUser$ = new Subject<null>();
  editUserFound$ = new Subject<User>();

  //************************************************ */
  //************************************************ */
  // Methods

  getAdminUsers() {
    return this.adminUsers;
  }

  //*************** */

  getUsers() {
    return this.users;
  }

  //*************** */

  addUser(user: FormUser) {
    let id;
    if (this.users.length != 0) {
      id = this.users[this.users.length - 1].id + 1;
    } else {
      id = 1;
    }

    this.users.push({ id, ...user });
    this.users$.next(this.users);
  }

  //*************** */

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    this.users$.next(this.users);
  }

  //*************** */

  editUser(id: number) {
    this.editUser$.next(null);
    const user = this.getUserById(id);

    setTimeout(() => {
      this.editUserFound$.next(user);
    }, 0);
  }

  //*************** */

  editUserById(id: number, userDTO: FormUser) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { id, ...userDTO };
    this.users$.next(this.users);
  }

  //*************** */

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (user) return user;
    return {
      id: 0,
      name: '',
      lastName: '',
      email: '',
      phone: 0,
      address: '',
      role: 'user',
    };
  }
}

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
