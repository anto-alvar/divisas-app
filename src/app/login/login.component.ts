import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserNameModel } from '../my-data/models/user-name.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loggedUser: BehaviorSubject<UserNameModel>;
  

  constructor(
    private loginService: LoginService
  ) {

    }

  ngOnInit() {
  }

  isLogged(): boolean {
    if(this.loggedUser == undefined) {
      return false;
    }
    else {
      return this.loggedUser.getValue().isLoggedIn;
    }
  }

  loginMockUser() {
    this.loginService.doLogin();
  }

}
