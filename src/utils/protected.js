import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import authCheck from "./authCheck";

const Protected = ({ isLoggedIn, children }) => {
    const {user} = useUserContext();
    authCheck();
    if (user.isLoggedIn === false) {
        return <Navigate to="/login" replace />;
    } 
    return children;
}
export default Protected;