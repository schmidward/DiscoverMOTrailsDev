import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default Protected;