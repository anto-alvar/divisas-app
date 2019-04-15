import { Injectable } from '@angular/core';
import { WalletModel } from './models/wallet-model';
import { WalletsModel } from './models/wallets-model';
import { DIVISA_NAME, DIVISA_CODE } from '../divisas-type';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private wallets: WalletsModel = new WalletsModel();

  constructor() {
   }

   getWallets() {
     return this.wallets;
   }

   getWalletById(id: number) {
     return this.wallets.getWalletById(id)
   }

   getWalletIdByCode(code: DIVISA_CODE) {
     return this.wallets.getWalletIdByCode(code);
   }

   addNewWallet(id: number, code: DIVISA_CODE) {
     if(!this.wallets.checkWallet(code)) {
      this.wallets.addWallet(id, code);
      this.wallets.updateHasWallet(code);
     }
     else {
       throw new Error("Ya existe una cartera de esa divisa");
     }
   }

   removeWalletById(id: number) {
     this.wallets.removeWalletById(id);
     this.wallets.updateHasWallet(this.wallets.getWalletCodeById(id));
   }

   removeAllWallets() {
     this.wallets.clearWallets();
     this.wallets.resetHasWallet();
   }

   addMoneyToWalletById(id: number, amount: number) {
    this.wallets.addMoneyToWalletById(id, amount);
   }

   subtractMoneyFromWalletById(id: number, amount: number) {
     this.wallets.subtractMoneyToWalletById(id, amount);
   }

}
