export class User{
    email : string;
    isAuthenticated: boolean;

    constructor(email:string, isAuthenticated:boolean){
        this.email = email;
        this.isAuthenticated = isAuthenticated;
    }
}