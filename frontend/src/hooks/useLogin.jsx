import { useState } from "react"
import {useAuthContext} from "./useAuthContext"
import {showToastMessage} from "../components/ToastMsg"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    
    const login = async ({email,password}) => {
        setIsLoading(true)
        const res = await fetch(
            'https://exp-backend.onrender.com/api/user/login',
        {
            method : 'POST',
            headers : {'Content-Type' : 'application/json',
                      'accept' : 'application/json'},
            body : JSON.stringify({email,password})
        })
        const json = await res.json()

        if(!res.ok) {
            console.log("res not ok,",json)
            setError(json.error)
            setIsLoading(false)
            return {error : json.error};
        }
        else {
            // save to localStorage
            console.log("res ok,",json)
            console.log("use login hook" + json)
            localStorage.setItem('user',JSON.stringify(json))
            //update auth context
            dispatch({type: 'LOGIN',payload : json})
            setError(null)
            setIsLoading(false)
            return {error : ""};
        }
    }
    return {login,isLoading,error}
}
