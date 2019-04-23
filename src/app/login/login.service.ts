import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { UserNameModel } from '../my-data/models/user-name.model';
import { mockUser } from '../my-data/models/mock-user';
import { mockUser2 } from '../my-data/models/mock-user2';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: UserNameModel[];
  public loggedUser;
  constructor() {
    this.users = [];
  }

  getUsers(): UserNameModel[] {
    return this.users;
  }

  getUserById(id: number): UserNameModel {
    const user = this.users.find((wallet) => wallet.id === id);
    return user;
  }

  doLogin(userId: number) {

    switch (userId) {
      case 1: {
        this.createMockUser();
        break;
      }
      case 2: {
        this.createMockUser2();
        break;
      }
      default: {
        this.createMockUser();
        break;
      }
    }
    this.users[0].isLoggedIn = true;
  }

  createNewUser(
    id: number,
    email: string,
    name: string,
    surname: string,
    userName: string,
    password: string,
    phoneNumber: number,
    dni: string,
    country: string,
    gender: 'Hombre' | 'Mujer' | 'Otro',
    birthDate: Date,
    address: string
  ) {
    const user = new UserNameModel(
      id, email, name, surname, userName, password, phoneNumber, dni, country, gender, birthDate, address);
    this.users.push(user);
  }

  createMockUser() {
    this.loggedUser = mockUser;
    localStorage.setItem('user1', JSON.stringify(mockUser));
    this.users.push(mockUser);
    console.log(this.users);
  }

  createMockUser2() {
    this.loggedUser = mockUser2;
    localStorage.setItem('user1', JSON.stringify(mockUser2));
    this.users.push(mockUser2);
    console.log(this.users);
  }

  deleteMockUsers() {
    localStorage.clear();
  }

}
