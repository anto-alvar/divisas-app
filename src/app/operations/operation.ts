import { WalletModel } from "../my-wallet/models/wallet-model";
import { TRANSACTION_TYPE } from './transaction-type';

export class Operation {

    constructor(
    private id: number,
    private state: boolean,
    private date: Date,
    private wallet: WalletModel,
    private amount: number  
    ) {
        this.id = id;
        this.state = state;
        this.date = date;
        this.wallet = wallet;
        this.amount = amount;
    }


}