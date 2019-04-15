import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';
import { DIVISA_CODE } from '../divisas-type';
import { UserNameModel } from '../my-data/models/user-name.model';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {

  private user: UserNameModel;

  constructor(
    private walletService: WalletService
  ) {

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

  createTestWallet() {
    this.walletService.addNewWallet(1, DIVISA_CODE.EURO);
    console.log(this.walletService.getWallets());
  }

  add500ToTestWallet() {
    this.walletService.addMoneyToWalletById(1, 500);
    console.log(this.walletService.getWallets());
  }

  withdraw100FromTestWallet() {
    this.walletService.subtractMoneyFromWalletById(1, 100);
    console.log(this.walletService.getWallets());
  }

}
