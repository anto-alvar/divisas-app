import { Component, OnInit } from '@angular/core';
import { UserNameModel } from '../my-data/models/user-name.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

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
