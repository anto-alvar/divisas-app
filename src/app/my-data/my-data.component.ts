import { Component, OnInit, Input } from '@angular/core';
import { UserNameModel} from './models/user-name.model';


@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  @Input()
  private user: UserNameModel;




  constructor() {
   }

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
