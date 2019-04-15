import { WalletsModel } from 'src/app/my-wallet/models/wallets-model';
import { WalletService } from 'src/app/my-wallet/wallet.service';

export class AccountModel {

    private walletService: WalletService;
    

    constructor(
        
        private idAccount: number,
        private tripCard: string,
        private history?: any,
        
    ) {
        this.idAccount = idAccount;
        this.tripCard = tripCard;
        this.history = [];
    }
}