import { useState } from "react"
import {useAuthContext} from "./useAuthContext"

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    
    const login = async ({email,password}) => {
        setIsLoading(true)
        const res = await fetch('/api/user/login',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email,password})
        })
        const json = await res.json()
        if(!res.ok) {
            setError(json.error)
            setIsLoading(false)
        }
        else {
            // save to localStorage
            // console.log(json)
            localStorage.setItem('user',JSON.stringify(json))
            //update auth context
            dispatch({type: 'LOGIN',payload : json})

            setError(null)
            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}
