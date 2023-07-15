import React,{useEffect, useState} from 'react'
import TransBlock from '../components/TransBlock'
import { useExpenseContext } from '../hooks/useExpenseContext'
import '../components/scrollbar.css'
import {useNavContext} from '../hooks/useNavContext'
import "../components/chart.css"

const Transactions = () => {
  const {expenses,dispatch} = useExpenseContext()
  const [showNav] = useNavContext()

  useEffect(() => {
    if(showNav) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "visible";
    }
  },[showNav])

  // console.log(expenses)
  const style = "bg-cblack-light overflow-y-auto scroll min-h-[100vh] max-h-[100vh] shadow-inner shadow-black col-span-3 px-4 border-gray-300 text-white rounded-3xl flex flex-col"

  return (
    <div 
    className= {style}>
      <h1 className='text-[2rem] text-cgreen-light m-2'>Recent Transactions</h1>
      {expenses?.map(trans => <TransBlock key={trans._id} trans = {trans} />)}
    </div>
  )
}

export default Transactions
