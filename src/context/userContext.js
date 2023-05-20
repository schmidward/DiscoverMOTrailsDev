import React, { useContext } from "react";
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

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);
    
    function loadUser() {
        setUser(new User(localStorage.getItem("id"), localStorage.getItem("displayName"), localStorage.getItem("email"), localStorage.getItem("isLoggedIn")));
    }

    function logIn(id, displayName, email) {
        setUser(new User(id, displayName, email, true));
        localStorage.setItem("id", id);
        localStorage.setItem("displayName", displayName);
        localStorage.setItem("email", email);
        localStorage.setItem("isLoggedIn", true);


    }
    function logOut() {
        setUser(USER);
        localStorage.removeItem("id");
        localStorage.removeItem("displayName");
        localStorage.removeItem("email");
        localStorage.removeItem("isLoggedIn");
    }

    return (
        <userContext.Provider value={{ user, loadUser, logIn, logOut }}>
            { children }
        </userContext.Provider>
    );
}

export function useUserContext() {
    const {user, loadUser, logIn, logOut} = useContext(userContext);

    return {user, loadUser, logIn, logOut};
}