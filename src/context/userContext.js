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

// TODO: PUT JSON.STRINGFY FOR USER VALUES

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);


    function loadUser() {
        return (new User(localStorage.getItem("id"), localStorage.getItem("displayName"), localStorage.getItem("email"), localStorage.getItem("isLoggedIn")));
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
        <userContext.Provider value={{ user, setUser, loadUser, logIn, logOut }}>
            { children }
        </userContext.Provider>
    );
}

export function useUserContext() {
    const {user, setUser, loadUser, logIn, logOut} = useContext(userContext);

    return {user, setUser, loadUser, logIn, logOut};
}