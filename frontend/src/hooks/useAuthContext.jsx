import { AuthContext} from "../context/AuthContext";
import { useContext,useEffect } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        
        if(user) {
            context.dispatch({type : 'LOGIN',payload : user})
        }
        context.dispatch({type : 'LOADING',payload : false})
    },[])

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}