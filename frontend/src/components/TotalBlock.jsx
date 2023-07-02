import React from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'

const TotalBlock = ({income}) => {

  const {expenses} = useExpenseContext()
  if(income) 
    return(
      <div className=' flex items-center justify-center'>
        <div className=" text-3xl bg-cgreen-dark py-2 px-3 w-4/5 h-1/2 rounded-lg flex items-center justify-center
          lg:text-[1.7rem]
          md:text-[1.6rem] 
          sm:text-[1.3rem] sm:py-12">
          Total Income is <span className='ml-2'>${expenses?.filter(trans => trans.isIncome)
          ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
        </div>
      </div>
    )
  else
    return (
      <div className=' flex items-center justify-center'>
      <div className="text-3xl bg-corange-light py-2 px-3 w-4/5 h-1/2 rounded-lg flex items-center justify-center
        lg:text-[1.7rem]
        md:text-[1.6rem] 
        sm:text-[1.3rem] sm:py-12">
        Total Expense is <span className='ml-2'>${expenses?.filter(trans => !trans.isIncome)
        ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
      </div>
    </div>
    )
  
}

export default TotalBlock