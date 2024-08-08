import { createContext,useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state,action) => {
    switch(action.type) {
        case 'LOGIN' : 
            return {user : action.payload, isLoading : false}

        case 'LOGOUT' : 
            return {user : null, isLoading : false}
        
        case 'LOADING' : 
            return {user : state.user, isLoading : action.payload}

        default : 
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user : null,
        isLoading : true
    })

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}