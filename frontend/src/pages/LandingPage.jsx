import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Login from '../components/Login';
import Signup from '../components/Signup';
  

const TypeText = () => {
  const [textColor,setTextColor] = useState('#e35933')

    return (
      <div style={{color : textColor}}>
        <TypeAnimation
        sequence={[
          'Track your Expenses.',
          1000,
          () => {setTextColor('#379683')}, 
          'Track your Incomes.',
          1000,
          () => {setTextColor('#e35933')}, 
        ]}
        wrapper="h2"
        speed={35}
        className='text-[3.5rem]'
        deletionSpeed={40}
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
        <h1 className='text-corange-light text-[3rem] pl-4'>E-Tracker</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 xl:h-[90vh] ">
        {/* left side */}
        <div className="text-white flex flex-col items-center justify-center">
          <TypeText />
          <div className="">

            <p className='text-2xl pl-36'>Do not save what is left after spending,
              but spend what is left after saving.
              <span>-Warren Buffett</span>
            </p>
            
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center items-center">
          {hadAccount ? <Login /> : <Signup />}
          {hadAccount ? <button onClick={handleClick} className='hover:text-white text-corange-light text-xl bg-none'>Create your account</button> 
                      : <button onClick={handleClick} className='hover:text-white text-corange-light text-xl'>Already had an account ?</button>}
        </div>
      </div>
    </div>
  )
}

export default LandingPage