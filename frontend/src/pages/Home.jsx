import React,{useEffect} from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'
import {useAuthContext} from '../hooks/useAuthContext'
import Chart from '../components/Chart'
import TransBlock from '../components/TransBlock'
import TotalBlock from '../components/TotalBlock'

const RecentBlock = ({arr}) => {
  
  return (
    <div className='p-0 overflow-y-auto scroll'>
      <h1 className='text-3xl text-cgreen-light my-2'>Recent History</h1>
      {
        arr?.filter((trans,index) => index<4).map(trans => <TransBlock key = {trans._id} trans = {trans} />)
      }
    </div>
  )

}

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
  },[dispatch,user])

  return (
    <div className='bg-cblack-light shadow-inner shadow-black col-span-3 border-gray-300 text-white rounded-3xl grid grid-cols-2 grid-rows-2 overflow-y-auto scroll'>
      <Chart />
      <RecentBlock arr = {expenses} />
      <TotalBlock income = {true} />
      <TotalBlock income = {false} />
    </div>
  )
}

export default Home