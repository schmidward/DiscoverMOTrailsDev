import React from "react";
import { useUserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Logout = () => {
    const {logOut} = useUserContext();
    const [cookies, removeCookie] = useCookies(['Authorization']);
    logOut();
    removeCookie('Authorization');

    return <Navigate to="/" />
}

export default Logout;