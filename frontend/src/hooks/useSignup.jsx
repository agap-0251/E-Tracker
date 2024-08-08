import { useState } from "react"
import {useAuthContext} from "./useAuthContext"

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    
    const signup = async ({email,uname,password}) => {
        setIsLoading(true)
        const res = await fetch(
            'https://exp-backend.onrender.com/api/user/signup',
        {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email,uname,password})
        })
        const json = await res.json()
        if(!res.ok) {
            setError(json.error)
            setIsLoading(false)
            return {error: json.error};
        }
        else {
            // save to localStorage
            // console.log(json)
            localStorage.setItem('user',JSON.stringify(json))
            //update auth context
            dispatch({type: 'LOGIN',payload : json})

            setError(null)
            setIsLoading(false)
            return {error : ""};
        }
    }
    return {signup,isLoading,error}
}
