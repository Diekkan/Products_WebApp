import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../../../Models/User";

interface AuthContextProps{
    user: User,
    setUser: Function
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


const AuthContextProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState({email: '', isAuthenticated: false})

    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;