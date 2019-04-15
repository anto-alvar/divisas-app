import { Injectable } from '@angular/core';
import { UserNameModel } from '../my-data/models/user-name.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: UserNameModel[];
  
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  doLogin() {

    setTimeout( () => {
      this.createTestUser();
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

  createTestUser() {
    this.createNewUser(
      1, "pedro.alvarez@gmail.com", "Pedro", "Álvarez", "pdrAlv", "alv67!", 555555555, "XXXXXXXX", "España", "Hombre", new Date(1984, 7, 8), "C/Test, Madrid");
      console.log(this.users);
  }
}
