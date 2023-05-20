import { Cookies } from "react-cookie";
import { useUserContext } from "../context/userContext";

const authCheck = () => {
    const {logOut} = useUserContext();
    const cookies = new Cookies()
    if (!cookies.get('Authorization')) {
        logOut();
    }
};

export default authCheck;