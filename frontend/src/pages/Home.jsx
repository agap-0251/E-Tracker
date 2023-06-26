import React,{useEffect} from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {

  const {expenses,dispatch} = useExpenseContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchExpenses = async () => {
        const res = await fetch('/api/expenses',{
            headers : {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await res.json()
        // console.log(json)
        if(res.ok) {
            dispatch({type : 'SET_EXPENSES',payload : json})
        }
    }
    if(user) {
        fetchExpenses()
    }
  },[dispatch,expenses])

  return (
    <div className='bg-cblack-light col-span-3 border-gray-300 text-white rounded-3xl flex flex-col overflow-y-auto scroll'>
      Home
    </div>
  )
}

export default Home