import React,{useEffect} from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'
import {useAuthContext} from '../hooks/useAuthContext'
import Chart from '../components/Chart'
import TransBlock from '../components/TransBlock'
import TotalBlock from '../components/TotalBlock'

const RecentBlock = ({arr}) => {
  
  return (
    <div className='p-0 overflow-y-auto scroll max-h-[29rem] 
      md:col-span-1 md:mt-0
      sm:col-span-2 sm:h-[24rem] sm:mt-14 sm:px-6'>
      <h1 className='text-3xl text-cgreen-light my-3'>Recent History</h1>
      {
        arr?.filter((trans,index) => index<5).map(trans => <TransBlock key = {trans._id} trans = {trans} />)
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
    <div className='bg-cblack-light md:h-[100vh] shadow-inner shadow-black lg:col-span-3 border-gray-300 text-white rounded-3xl grid grid-cols-2 md:grid-rows-2 overflow-y-auto 
    scroll sm:grid-rows-3 sm:max-h-[120vh] sm:min-h-[100vh] 
    xs:grid-rows-3 xs:max-h-[120vh] xs:min-h-[100vh] 
    '>
      <Chart />
      <RecentBlock arr = {expenses} />
      <div className="col-span-2 mb-10 grid grid-cols-2 grid-rows-1
        sm:mt-36">
        <TotalBlock income = {true} />
        <TotalBlock income = {false} />
      </div>
    </div>
  )
}

export default Home