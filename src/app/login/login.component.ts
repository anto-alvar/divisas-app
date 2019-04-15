import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserNameModel } from '../my-data/models/user-name.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loggedUser: UserNameModel;

  constructor(
    private loginService: LoginService
  ) {

   }

  ngOnInit() {
    this.getUserInfo();
    this.loginService.doLogin();
  }

  isLogged(): boolean {
    if(this.loggedUser === undefined) {
      return false;
    }
    else {
      return this.loggedUser.isLoggedIn;
    }
  }

  getUserInfo() {
    if(this.isLogged) {
      this.loggedUser = this.loginService.getUsers()[0];
    }
    else {
      return;
    }
  }


}
