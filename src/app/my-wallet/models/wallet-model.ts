import { DIVISA_NAME, DIVISA_CODE } from '../../divisas-type';


export class WalletModel {

    private _idWallet: number;
    private _currency: DIVISA_NAME;
    private _code: DIVISA_CODE;
    private _symbol: string;
    private _amount: number;

    get idWallet() { return this._idWallet; }

    set idWallet( idWallet: number) { this._idWallet = idWallet; }

    get currency() { return this._currency; }

    set currency( currency: DIVISA_NAME) { this._currency = currency; }

    get code() { return this._code; }

    set code( code: DIVISA_CODE) { this._code = code; }

    get symbol () { return this._symbol};

    set symbol (symbol: string) { this._symbol = symbol };

    get amount() { return this._amount; }

    set amount( amount: number) { this._amount = amount; }

    constructor(
        idWallet: number,
        code: DIVISA_CODE,
    ) {
        this._idWallet = idWallet;
        this._code = code;
        this._amount = 0;

        switch (code) {
            case DIVISA_CODE.DOLAR_AMERICANO: {
                this._currency = DIVISA_NAME.DOLAR_AMERICANO;
                this._symbol = "$";
                console.log("AMERICANOS");
                break;
            }
            case DIVISA_CODE.DOLAR_AUSTRALIANO: {
                this._currency = DIVISA_NAME.DOLAR_AUSTRALIANO;
                this._symbol = "A$";
                break;
            }
            case DIVISA_CODE.DOLAR_CANADIENSE: {
                this._currency = DIVISA_NAME.DOLAR_CANADIENSE;
                this._symbol = "C$";
                break;
            }
            case DIVISA_CODE.EURO: {
                this._currency = DIVISA_NAME.EURO;
                this._symbol = "€";
                break;
            }
            case DIVISA_CODE.FRANCO_SUIZO: {
                this._currency = DIVISA_NAME.FRANCO_SUIZO;
                this._symbol = "Fr";
                break;
            }
            case DIVISA_CODE.LIBRA: {
                this._currency = DIVISA_NAME.LIBRA;
                this._symbol = "£";
                break;
            }
            case DIVISA_CODE.PESO: {
                this._currency = DIVISA_NAME.PESO;
                this._symbol = "$";
                break;
            }
            case DIVISA_CODE.YEN: {
                this._currency = DIVISA_NAME.YEN;
                this._symbol = "¥";
                break;
            }
        }
    }

    addMoney(money: number): number {
        this.amount = this.amount + money;
        return this.amount;
    }

    subtractMoney(money: number): number {
        if (this.amount >= money) {
            this.amount = this.amount - money;
            return this.amount;
        }
        else {
            throw new Error("Dinero en cartera insuficiente");
        }
    }

    clearMoney(): number {
        const money = this.amount;
        this.amount = 0;
        return money;
    }



}