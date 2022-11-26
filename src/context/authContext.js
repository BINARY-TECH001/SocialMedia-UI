import { createContext, useEffect, useState } from "react";
import profileImg from "../images/ade.jpg"


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const login = ()=>{
        // TODO
        setCurrentUser({
            id:1,
            name: "Binary Tech",
            profilePic: profileImg
        })
    } 
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}
