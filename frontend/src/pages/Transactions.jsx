import React,{useEffect, useState} from 'react'
import TransBlock from '../components/TransBlock'
import { useExpenseContext } from '../hooks/useExpenseContext'
import '../components/scrollbar.css'

const Transactions = () => {
  const {expenses,dispatch} = useExpenseContext()
  // console.log(expenses)

  return (
    <div 
    className='bg-cblack-light shadow-inner shadow-black col-span-3 px-4 border-gray-300 text-white rounded-3xl flex flex-col overflow-y-auto scroll'>
      <h1 className='text-[2rem] text-cgreen-light m-2'>Recent Transactions</h1>
      {expenses?.map(trans => <TransBlock key={trans._id} trans = {trans} />)}
    </div>
  )
}

export default Transactions