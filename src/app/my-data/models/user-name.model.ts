import { AccountModel } from './account-model';

export class UserNameModel {


    private _account: AccountModel;
    private _id: number;
    private _email: string;
    private _name: string;
    private _surname: string;
    private _userName: string;
    private _password: string;
    private _phoneNumber: number;
    private _dni: string;
    private _country: string;
    private _gender: "Hombre" | "Mujer" | "Otro";
    private _birthDate: Date;
    private _address: string;
    private _isLoggedIn: boolean

    get account() { return this._account };

    set account(account: AccountModel) { this._account = account };

    get id() { return this._id };

    set id(id: number) { this._id = id };

    get email() { return this._email };

    set email(email: string) { this._email = email };

    get name() { return this._name };

    set name(name: string) { this._name = name };

    get surname() { return this._surname };

    set surname(surname: string) { this._surname = surname };

    get userName() { return this._userName };

    set userName(userName: string) { this._userName = userName };

    get password() { return this._password };

    set password(password: string) { this._password = password };

    get phoneNumber() { return this._phoneNumber };

    set phoneNumber(phoneNumber: number) { this._phoneNumber = phoneNumber };

    get dni() { return this._dni };

    set dni(dni: string) { this._dni = dni };

    get country() { return this._country };

    set country(country: string) { this._country = country };

    get gender() { return this._gender };

    set gender(gender: "Hombre" | "Mujer" | "Otro") { this._gender = gender };

    get birthDate() { return this._birthDate };

    set birthDate(birthDate: Date) { this._birthDate = birthDate };

    get address() { return this._address };

    set address(address: string) { this._address = address };

    get isLoggedIn() { return this._isLoggedIn; }

    set isLoggedIn(isLoggedIn) { this._isLoggedIn = isLoggedIn };

    constructor(
        id: number,
        email: string,
        name: string,
        surname: string,
        userName: string,
        password: string,
        phoneNumber: number,
        dni: string,
        country: string,
        gender: "Hombre" | "Mujer" | "Otro",
        birthDate: Date,
        address: string,
    ) {

        this.account = new AccountModel(1435, "222");

        this.id = id;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.dni = dni;
        this.country = country;
        this.gender = gender;
        this.birthDate = birthDate;
        this.address = address;
        this.isLoggedIn = false;
    }

}