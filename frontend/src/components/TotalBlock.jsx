import React from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'

const TotalBlock = ({income}) => {

  const {expenses} = useExpenseContext()
  if(income) 
    return(
      <div className=' flex items-center justify-center'>
        <div className=" text-3xl bg-cgreen-dark py-2 px-3 w-4/5 h-6/7 rounded-lg flex items-center justify-center
          lg:text-[1.7rem]
          md:text-[1.6rem] 
          sm:text-[1.3rem] sm:py-12 sm:mb-0
          xs:text-[1.3rem] xs:py-6 xs:mb-5

          vs:text-[1.1rem] vs:py-6 vs:mb-5 
          ">
          Total Income is <span className='ml-2'>${expenses?.filter(trans => trans.isIncome)
          ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
        </div>
      </div>
    )
  else
    return (
      <div className=' flex items-center justify-center'>
      <div className="text-3xl bg-corange-light py-2 px-3 w-4/5 h-6/7 rounded-lg flex items-center justify-center
        lg:text-[1.7rem]
        md:text-[1.6rem] 
        sm:text-[1.3rem] sm:py-12 sm:my-0
        xs:text-[1.3rem] xs:py-6 xs:my-0 xs:mb-4
        vs:text-[1.1rem] vs:py-6 vs:my-0 vs:mb-4
        ">
        Total Expense is <span className='ml-2'>${expenses?.filter(trans => !trans.isIncome)
        ?.map(trans => trans.amount).reduce((accumulator,currentValue) => accumulator + currentValue,0) || 0}</span>
      </div>
    </div>
    )
  
}

export default TotalBlock