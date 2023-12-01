import { useContext, useState } from "react";
import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";
import AuthContextProvider, { AuthContext } from "../Context/AuthContext/AuthContext";

const AuthLayerComponent = () => {

    const [view, setView] = useState("login");

    return (
            <div className=" flex items-center justify-center h-screen bg-sky-950">
                <div className="flex items-center justify-center bg-white p-16 rounded-md shadow-2xl">
                    <AuthContextProvider>
                    {
                        view === "login" ?
                        <LoginFormComponent {...{setView: setView}}/> :
                        <RegisterFormComponent  {...{setView: setView}}/>
                    }
                    </AuthContextProvider>
                </div>
            </div>
    )
}

export default AuthLayerComponent;