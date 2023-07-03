import { useAuthContext } from "./useAuthContext"
import { useExpenseContext } from "./useExpenseContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch : dispatchExpenses} = useExpenseContext()

    const logout = () => {
        //remove user from localStorage
        localStorage.removeItem('user')
    
        //dispatch logout
          dispatch({type : 'LOGOUT'})
          dispatchExpenses({type : 'SET_EXPENSES',payload : null})
    }
    return {logout}

}