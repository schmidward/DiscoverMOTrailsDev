import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Login from "../components/login/login";


const Protected = ({ children }) => {
    const {user, loadUser, setUser} = useUserContext();
    console.log(user);
    
    useEffect(() => {
        const storedUser = loadUser();
        console.log(storedUser);
        setUser(storedUser);
    }, []);
    
    // authCheck();

    return <>{user.isLoggedIn ? children : <Login />}</>;
    
}
export default Protected;