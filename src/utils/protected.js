import React from "react";
import { useUserContext } from "../context/userContext";
import Login from "../components/auth/auth";


const Protected = ({ children }) => {
    const {user} = useUserContext();

    return <>{user.isLoggedIn ? children : <Login />}</>;
    
}
export default Protected;