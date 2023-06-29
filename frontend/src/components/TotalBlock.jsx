import React from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'

const TotalBlock = ({income}) => {

  const {expenses,dispatch} = useExpenseContext()
  if(income) 
    return(
      <div className=' flex items-center justify-center'>
        <div className=" text-3xl bg-cgreen-dark py-2 px-3 w-3/4 h-1/3 rounded-lg flex items-center justify-center">
          Total Income is <span className='ml-2'>${expenses?.filter(trans => trans.isIncome)
          ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
        </div>
      </div>
    )
  else
    return (
      <div className=' flex items-center justify-center'>
      <div className="text-3xl bg-corange-light py-2 px-3 w-3/4 h-1/3 rounded-lg flex items-center justify-center">
        Total Expense is <span className='ml-2'>${expenses?.filter(trans => !trans.isIncome)
        ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
      </div>
    </div>
    )
  
}

export default TotalBlock