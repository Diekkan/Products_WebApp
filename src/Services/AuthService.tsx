export class authService{

    urlBase = "http://localhost:5237/api";

    verifyAuth = () => {
        if(localStorage.getItem('auth')){
            return true;
        }
        return false;
    }

    signIn = (email:string, password: string) => {
        localStorage.setItem('auth', 'yes');
        return true;
    }
    
    register = (fullName: string, email: string, password: string) => {
        let body = {
            fullName: fullName,
            email: email,
            password: password
        }
        let response;

        console.log(body);
        fetch(`${this.urlBase}/user`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => response = json)
        .catch(error => console.error(error));
        console.log(response);
        return response;
    }

    signOut = () => {
        return false;
    }
}