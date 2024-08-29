import {useAuth} from "../contexts/AuthContext";
import {Navigate} from "react-router-dom";

export default function PrivateRoute({element: Component, ...rest}){
    const {currentUser} = useAuth();

    return currentUser ? (
        <Component {...rest}/>
    ) : (
        <Navigate to={"/login"} />
    );
}