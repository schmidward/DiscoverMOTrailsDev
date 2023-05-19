export default class User {
    id: number;
    displayName: string;
    email: string;
    password: string;
    accountLoggedIn: boolean;

    constructor(id: number, displayName: string, email: string, password: string, accountLoggedIn: boolean) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.accountLoggedIn = accountLoggedIn;
    }    

}