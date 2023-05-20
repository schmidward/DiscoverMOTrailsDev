import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import authCheck from "./authCheck";

const Protected = ({ children }) => {
    const {user, loadUser} = useUserContext();
    loadUser();
    // authCheck();
    if (user.isLoggedIn === false) {
        return <Navigate to="/login" replace />;
    } 
    return children;
}
export default Protected;