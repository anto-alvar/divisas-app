import {WalletModel} from './wallet-model';
import { DIVISA_CODE } from 'src/app/divisas-type';


export class WalletsModel {

    private wallets: WalletModel[];

    private hasUSD: boolean;
    private hasCAD: boolean;
    private hasAUD: boolean;
    private hasEUR: boolean;
    private hasGBP: boolean;
    private hasMXN: boolean;
    private hasJPY: boolean;
    private hasCHF: boolean;
    
    constructor() {

        this.wallets = new Array<WalletModel>();

        this.hasUSD = false;
        this.hasCAD = false;
        this.hasAUD = false;
        this.hasEUR = false;
        this.hasGBP = false;
        this.hasMXN = false;
        this.hasJPY = false;
        this.hasCHF = false;
    }

    checkWallet(code: DIVISA_CODE): boolean {
        switch (code) {
            case DIVISA_CODE.DOLAR_AMERICANO: {
                return this.hasUSD;
            }
            case DIVISA_CODE.DOLAR_AUSTRALIANO: {
                return this.hasAUD;
            }
            case DIVISA_CODE.DOLAR_CANADIENSE: {
                return this.hasCAD;
            }
            case DIVISA_CODE.EURO: {
                return this.hasEUR;
            }
            case DIVISA_CODE.FRANCO_SUIZO: {
                return this.hasCHF;
            }
            case DIVISA_CODE.LIBRA: {
                return this.hasGBP;
            }
            case DIVISA_CODE.PESO: {
                return this.hasMXN;
            }
            case DIVISA_CODE.YEN: {
                return this.hasJPY;
            }
        }
    }

    updateHasWallet(code: DIVISA_CODE) {
        switch (code) {
            case DIVISA_CODE.DOLAR_AMERICANO: {
                this.hasUSD = !this.hasUSD;
                break;
            }
            case DIVISA_CODE.DOLAR_AUSTRALIANO: {
                this.hasAUD = !this.hasAUD;
                break;
            }
            case DIVISA_CODE.DOLAR_CANADIENSE: {
                this.hasCAD = !this.hasCAD;
                break;
            }
            case DIVISA_CODE.EURO: {
                this.hasEUR = !this.hasEUR;
                break;
            }
            case DIVISA_CODE.FRANCO_SUIZO: {
                this.hasCHF = !this.hasCHF ;
                break;
            }
            case DIVISA_CODE.LIBRA: {
                this.hasGBP = !this.hasGBP;
                break;
            }
            case DIVISA_CODE.PESO: {
                this.hasMXN = !this.hasMXN;
                break;
            }
            case DIVISA_CODE.YEN: {
                this.hasJPY = !this.hasJPY;
                break;
            }
        }
    }

    resetHasWallet() {
        this.hasUSD = false;
        this.hasCAD = false;
        this.hasAUD = false;
        this.hasEUR = false;
        this.hasGBP = false;
        this.hasMXN = false;
        this.hasJPY = false;
        this.hasCHF = false;
    }


    getWalletById(id: number): WalletModel {
        const wallet = this.wallets.find( (wallet) => wallet.idWallet === id);
        return wallet;
    }

    getWalletIndexById(id: number): number {
        return this.wallets.indexOf(this.getWalletById(id));
    }

    getWalletIdByCode(code: DIVISA_CODE): number {
        const wallet = this.wallets.find( (wallet) => wallet.code === code);
        return wallet.idWallet;
    }

    getWalletCodeById(id: number): DIVISA_CODE {
        const wallet = this.getWalletById(id);
        return wallet.code;
    }

    addWallet(idWallet: number, code: DIVISA_CODE) {
        const wallet = new WalletModel(idWallet, code);
        this.wallets.push(wallet);


    }

    removeWalletById(id: number) {
        this.wallets.splice(this.getWalletIndexById(id),1);
    }

    clearWallets() {
        this.wallets.splice(0,this.wallets.length);
    }

    addMoneyToWalletById(id: number, amount: number) {
        this.wallets[this.getWalletIndexById(id)].addMoney(amount);
    }

    subtractMoneyToWalletById(id: number, money: number) {
        this.wallets[this.getWalletIndexById(id)].subtractMoney(money);
    }

    clearMoneyOfWalletById(id: number) {
        this.wallets[this.getWalletIndexById(id)].clearMoney();
    }

}