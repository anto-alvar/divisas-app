import { Component, OnInit } from '@angular/core';
import { UserNameModel} from './models/user-name.model';


@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  private user: UserNameModel;




  constructor() {
   }

  ngOnInit() {
  }

}
