import { PathContext } from "../context/PathContext";
import { useContext,useEffect } from "react";

export const usePathContext = () => {
    const context = useContext(PathContext)
    useEffect(() => {
        context.setPath(localStorage.getItem("path") || "/")  
    },[context.path])

    if(!context) {
        throw Error('usePathContext must be used inside an NavContextProvider')
    }
    // console.log(context)
    return context
}