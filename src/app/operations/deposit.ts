import { Operation } from './operation';
import { WalletModel } from '../my-wallet/models/wallet-model';
import { TRANSACTION_TYPE } from './transaction-type';

export class Deposit extends Operation {

    constructor(
        id: number,
        state: boolean,
        date: Date,
        wallet: WalletModel,
        amount: number,
    ) {
        super(id, state, date, wallet, amount);
    }


}