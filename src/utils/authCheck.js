import { Cookies } from "react-cookie";
import { useUserContext } from "../context/userContext";

const authCheck = () => {
    const {logOut} = useUserContext();
    const cookies = new Cookies();
    if (cookies.get('Authorization') === undefined) {
        logOut();
        return false;
    } else {
        return true;
    }
};

export default authCheck;