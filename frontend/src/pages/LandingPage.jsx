import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Login from '../components/Login';
import Signup from '../components/Signup';
  

const TypeText = () => {
  const [textColor,setTextColor] = useState('#e35933')

    return (
      <div style={{color : textColor}}
       className='xl:pl-28 xl:text-[4.4rem]
       lg:text-[3.8rem] lg:px-24
       md:text-[4.8rem] md:px-8
       sm:text-[4.4rem] sm:px-8
       xs:text-[3.5rem]
       xxs:text-[2.9rem]
       text-[2rem]'>
        <TypeAnimation
        sequence={[
          ' Expenses',
          1500,
          () => {setTextColor('#379683')}, 
          ' Incomes',
          1500,
          () => {setTextColor('#e35933')}, 
        ]}
        wrapper="h2"
        speed={30}
        deletionSpeed={35}
        repeat={Infinity}
      />
      </div>
    )
}

const LandingPage = () => {
  const [hadAccount,setHadAccount] = useState(true)

  const handleClick = () => {
    setHadAccount(prev => !prev);
  }

  return (
    <div className='bg-cblack-lighter min-h-[100vh]'>
      <div className="">
        <h1 className='text-corange-light xs:text-[3rem] pl-8 pt-4
        text-[2.3rem]'>E-Tracker</h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 lg:h-[90vh] 
        md:min-h[90vh] md:grid-cols-1 md:grid-rows-2
        xs:min-h[90vh] xs:grid-cols-1 xs:grid-rows-2 xs:mt-[-1.5rem]
        min-h[90vh] grid-cols-1 grid-rows-2 mt-[1rem]">
        {/* left side */}
        <div className="text-white flex flex-col lg:items-start justify-center
          md:items-center
          xs:items-center xs:gap-5
          items-center gap-5">
          <div className="">
            <h2 className='text-blue-300 
            2xl:text-[4.4rem]  2xl:pl-28 
            lg:pl-24
            md:text-[5rem] md:pl-8
            sm:text-[4.6rem] sm:pl-8
            xs:text-[3.9rem]
            xxs:text-[3rem]
            text-[2.4rem]'>
              Track your </h2>
            <TypeText />
          </div>
          <div className="flex justify-center">

            <p className='lg:text-2xl lg:pl-10
            md:pl-12 md:text-2xl md:w-4/5
            sm:pl-12 sm:text-xl sm:w-4/5
            xs:pl-12 xs:w-4/5
            xxs:pl-8 w-4/5
            pl-6 text-md
            '>Do not save what is left after spending,
              but spend what is left after saving.
              <span>-Warren Buffett</span>
            </p>
            
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center items-center">
          {hadAccount ? <Login /> : <Signup />}
          {hadAccount ? <button onClick={handleClick} className='hover:text-white text-corange-light xs:text-xl bg-none
          xxs:text-lg xxs:mt-2 mt-2'>Create your account.</button> 
                      : <button onClick={handleClick} className='hover:text-white text-corange-light xs:text-xl bg-none
                      xxs:text-lg xxs:mt-2 mt-2'>Already had an account ?</button>}
        </div>
      </div>
    </div>
  )
}

export default LandingPage