import { Component, OnInit } from '@angular/core';
import { UserNameModel } from '../my-data/models/user-name.model';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  private user: UserNameModel;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user1"));
    console.log(this.user);
  }

  isUserLogged() {
    if (this.user === null || this.user === undefined ) {
      return false;
    }
    else {
      return true;
    }
  } 

}
