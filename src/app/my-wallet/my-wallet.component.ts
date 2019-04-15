import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';
import { DIVISA_CODE } from '../divisas-type';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {

  constructor(
    private walletService: WalletService
  ) {

   }

  ngOnInit() {
  }

  createTestWallet() {
    this.walletService.addNewWallet(1, DIVISA_CODE.EURO);
    console.log(this.walletService.getWallets());
  }

  add100ToTestWallet() {
    this.walletService.addMoneyToWalletById(1, 500);
    console.log(this.walletService.getWallets());
  }

}
