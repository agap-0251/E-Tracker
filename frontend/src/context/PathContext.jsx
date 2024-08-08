import React,{createContext, useEffect, useState} from 'react'

export const PathContext = createContext()


export const PathContextProvider = ({children}) => {

 const[path,setPath] = useState();

    return (
    <PathContext.Provider value={{path,setPath}}>
        {children}
    </PathContext.Provider>
    )
}
