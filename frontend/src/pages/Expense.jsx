import React, { useEffect, useState } from 'react'
import EIForm from '../components/EIForm'
import TransBlock from '../components/TransBlock'
import { useExpenseContext } from '../hooks/useExpenseContext'
import '../components/scrollbar.css'

const RecentHistory = ({recent}) => {

  return (
    <div className='col-span-2 overflow-y-auto scroll flex flex-col border-[1px] border-gray-400'>
      <h1 className='text-3xl text-cgreen-light my-2'>Recent Expenses</h1>
      {recent?.map(trans => <TransBlock key={trans._id} trans = {trans} />)
      }
    </div>
  )
}

const TotalAmount = ({recent}) => {
  return (
    <div className='col-span-2  flex items-center justify-center'>
      <div className="text-3xl bg-cgreen-dark py-2 px-3 w-5/6 h-2/3 rounded-lg flex items-center justify-center">
        Total Expense is <span className='ml-2'>${recent?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
      </div>
    </div>
  )
}

const Expense = () => {

  const {expenses,dispatch} = useExpenseContext()
  const [recent,setRecent] = useState();
  useEffect(() => {
    setRecent(expenses?.filter(trans => !trans.isIncome));
  },[expenses,dispatch])
  return (
   <div className='bg-cblack-light shadow-inner shadow-black col-span-3  border-gray-300 text-white rounded-3xl 
    grid grid-cols-1 grid-rows-4 overflow-hidden'>
      <TotalAmount recent={recent} />
      <div className="grid grid-cols-3 row-span-3">
        <EIForm isIn={false} />
        <RecentHistory recent={recent} />
      </div>
      
   </div>
  )
}

export default Expense