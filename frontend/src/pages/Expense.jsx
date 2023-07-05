import React, { useEffect, useState } from 'react'
import EIForm from '../components/EIForm'
import TransBlock from '../components/TransBlock'
import { useExpenseContext } from '../hooks/useExpenseContext'
import '../components/scrollbar.css'
import {useNavContext} from '../hooks/useNavContext'

const RecentHistory = ({recent}) => {
  const [showNav] = useNavContext()
  const style = "glg:col-span-2  flex flex-col  px-4 shadow-inner shadow-black\
  xl:ml-1\
  lg:h-[38.2rem]  \
  lg:ml-[-0.9rem] lg:pl-4 lg:col-span-1\
    md:ml-[-1rem] md:h-[38.2rem]\
    sm:h-[27rem] \
    xs:h-[27rem]\
    xxs:h-[27rem] xxs:ml-[0rem]\
    ml-[0rem]"
  return (
    <div  className= {style}>
      <h1 className='text-3xl font-semibold text-cgreen-light my-2
        xxs:text-2xl'>Recent Expenses</h1>
      {recent?.map(trans => <TransBlock key={trans._id} trans = {trans} />)
      }
    </div>
  )
}

const TotalAmount = ({recent}) => {
  return (
    <div className=' flex items-center justify-center
    sm:py-4
    xs:py-4
    xxs:py-3
    py-1'>
       <div className="lg:text-3xl bg-cgreen-dark py-2 px-3 lg:w-5/6 lg:h-2/3 rounded-lg flex items-center justify-center
       md:h-3/4
       sm:py-4 sm:w-5/6 sm:h-5/6
       xs:py-4 xs:w-5/6 xs:text-2xl xs:h-5/6
       xxs:py-3 xxs:w-5/6 xxs:h-5/6 xxs:text-xl
       w-5/6 h-2/3 text-lg">
        Total Expense is <span className='ml-2'>${recent?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
      </div>
    </div>
  )
}

const Expense = () => {

  const {expenses,dispatch} = useExpenseContext()
  const [recent,setRecent] = useState();
  const [showNav] = useNavContext()
  useEffect(() => {
    setRecent(expenses?.filter(trans => !trans.isIncome));
  },[expenses,dispatch])

  useEffect(() => {
    if(showNav) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "visible";
    }
  },[showNav])

  return (
   <div className='bg-cblack-light shadow-inner shadow-black lg:col-span-3  border-gray-300 text-white rounded-3xl 
    grid grid-cols-1 lg:grid-rows-4 overflow-hidden md:min-h-max
    md:grid-rows-5'>
      <TotalAmount recent={recent} />
      <div className="grid glg:grid-cols-3 row-span-3
         lg:grid-cols-2
        md:grid-cols-2 md:row-span-5
        xxs:grid-cols-1">
        <EIForm isIn={false} />
        <RecentHistory recent={recent} />
      </div>
      
   </div>
  )
}

export default Expense