import {useUser} from "../context/UserContext";
import {Navigate} from "react-router-dom";

const withAuth = Component  => props => {
    const {user} = useUser()
    if (user !==null){
        return <Component{...props}/>
    }else {
        return <Navigate to="/"/>
    }
}

export default withAuth