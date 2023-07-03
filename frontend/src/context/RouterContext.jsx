import React,{createContext} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const RouterContext = createContext()


export const RouterContextProvider = ({children}) => {
    return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
    )
}
