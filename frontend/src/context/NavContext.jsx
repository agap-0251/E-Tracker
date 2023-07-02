import React,{createContext, useEffect, useState} from 'react'

export const NavContext = createContext()


export const NavContextProvider = ({children}) => {

 const[showNav,setShowNav] = useState(false);

    return (
    <NavContext.Provider value={[showNav,setShowNav]}>
        {children}
    </NavContext.Provider>
    )
}
