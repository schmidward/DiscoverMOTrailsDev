export default class User {
    id: number;
    displayName: string;
    email: string;
    password: string;
    isLoggedIn: boolean;

    constructor(id: number, displayName: string, email: string, password: string, isLoggedIn: boolean) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.isLoggedIn = isLoggedIn;
    }    

}