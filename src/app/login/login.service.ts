import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs'
import { UserNameModel } from '../my-data/models/user-name.model';
import { mockUser } from '../my-data/models/mock-user';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: UserNameModel[];
  public loggedUser = mockUser;
  
  constructor() {
    this.users = [];
  }

  getUsers(): UserNameModel[] {
    return this.users;
  }

  getUserById(id: number): UserNameModel {
    const user = this.users.find( (wallet) => wallet.id === id);
    return user;
  }

  doLogin() {

    setTimeout( () => {
      this.createMockUser();
      this.users[0].isLoggedIn = true;
    }, 2000)
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
    gender: "Hombre" | "Mujer" | "Otro",
    birthDate: Date,
    address: string
  ) {
      const user = new UserNameModel(
        id, email, name, surname, userName, password, phoneNumber, dni, country, gender, birthDate, address);
      this.users.push(user);
  }

  createMockUser() {
    localStorage.setItem("user1", JSON.stringify(mockUser));
    this.users.push(mockUser);
    console.log(this.users);
  }

}
