import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import User from "./user";

export const userContext = createContext({
    user: null,
    loadUser: () => {},
    logIn: () => {},
    logOut: () => {} 
});
                  // id, displayName, email, isLoggedIn
const USER = new User(0, "Guest",      "",      false);

// TODO: PUT JSON.STRINGFY FOR USER VALUES

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);

    useEffect(() => {
        const data = localStorage.getItem("User");
        setUser(JSON.parse(data));
    }, [])


    function loadUser() {
        const storedUser = localStorage.getItem("User");
        setUser(JSON.parse(storedUser));
    }

    function logIn(id, displayName, email) {
        const authedUser = new User(id, displayName, email, true);
        setUser(authedUser);
        localStorage.setItem("User", JSON.stringify(authedUser));
    }

    function logOut() {
        setUser(USER);
        localStorage.setItem("User", JSON.stringify(USER));
    }

    return (
        <userContext.Provider value={{ user, setUser, loadUser, logIn, logOut }}>
            { children }
        </userContext.Provider>
    );
}

export function useUserContext() {
    const {user, setUser, loadUser, logIn, logOut} = useContext(userContext);

    return {user, setUser, loadUser, logIn, logOut};
}