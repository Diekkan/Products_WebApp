import ButtonComponent from "../Common/Button/ButtonComponent";
import InputComponent from "../Common/Input/InputComponent"
import { useState } from "react";
import { authService } from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";


const AuthLayerComponent = ({setView}: any) => {
    
    const _authService = new authService();
    const _navigate = useNavigate();
    
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const inputs = [
        { id: "fullName", name: "fullName", type: "text", labelText: "Nombre completo", setData: setFullName },
        { id: "email", name: "email", type: "email", labelText: "Correo electrónico", setData: setEmail },
        { id: "password", name: "password", type: "password", labelText: "Contraseña", setData: setPassword}
    ]

    const Register = () => {
        if(_authService.register(fullName, email, password)){
            setIsAuthenticated(true);
        }
        setIsAuthenticated(false);
    };

    if(isAuthenticated){
        _navigate('/dashboard');
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-2xl h-20">
                    Registrar nueva cuenta
                </h2>
            </div>
            <form className="w-96 space-y-6">
                { 
                inputs.map((input, index) => (
                    <InputComponent key={index} {...input}/>
                ))}
                <div className="mt-5">
                 <ButtonComponent {...{type: "button", text: "Registrarme", clickFun: Register}}/>
                </div>
                <div>
                    <a onClick={() => setView("login")} className="cursor-pointer flex justify-center items-center font-semibold text-sky-950 hover:text-sky-950">
                        Iniciar sesión
                    </a>
                </div>
            </form>
        </div>
    )
}

export default AuthLayerComponent;