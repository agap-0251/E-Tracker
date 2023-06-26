import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext)

    if(!context) {
        throw Error('useExpenseContext must be used inside an ExpenseContextProvider')
    }
    // console.log(context)
    return context
}