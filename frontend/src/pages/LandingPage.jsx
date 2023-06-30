import React from 'react'

const LandingPage = ({children}) => {
  return (
    <div className='bg-cblack-lighter min-h-[100vh]'>
      <div className="">
        <h1 className='text-corange-light text-[3rem]'>E-Tracker</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="text-white border-2 flex flex-col items-center justify-center">
          <h1 className=' text-[3.6rem]'>Track your Expenses</h1>
          <div className="">

            <p>Do not save what is left after spending,
              but spend what is left after saving.
              <span>-Warren Buffett</span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default LandingPage