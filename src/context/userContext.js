import React, { useContext } from "react";
import { createContext, useState } from "react";
import User from "./user";


export const userContext = createContext({
    user: null,
    logIn: () => {},
    logOut: () => {} 
});
                  // id, displayName, email, password, isLoggedIn
const USER = new User(0, "Guest",      "",      "",      false);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);
    
    function logIn(id, displayName, email, password, isLoggedIn) {
        setUser(new User(id, displayName, email, password, isLoggedIn));
    }
    function logOut() {
        setUser(USER);
    }

    return (
        <userContext.Provider value={{ user, logIn, logOut }}>
            { children }
        </userContext.Provider>
    );
}

export function useUserContext() {
    const {user, logIn, logOut} = useContext(userContext);

    return {user, logIn, logOut};
}