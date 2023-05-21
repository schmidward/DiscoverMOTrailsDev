import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Login from "../components/login/login";


const Protected = ({ children }) => {
    const {user, loadUser, setUser} = useUserContext();
    console.log(user);
    
    //TODO: Clean up this use effect to only load a user if it's in local storage
    useEffect(() => {
        const storedUser = loadUser();
        console.log(storedUser);
        setUser(storedUser);
    }, []);

    return <>{user.isLoggedIn ? children : <Login />}</>;
    
}
export default Protected;