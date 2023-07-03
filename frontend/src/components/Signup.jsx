import React, { useState } from 'react'
import "../components/login.css"
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [uname,setUName] = useState('')
    const {signup,isLoading,error}  = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email,uname,password)
        signup({email,uname,password})
     
    }

  return (
    <div className="flex flex-col items-center justify-center">
        <form className='flex flex-col justify-evenly items-center rounded-xl bg-gray-200 md:w-[25rem] md:h-[26rem]
          sm:w-[25rem] sm:h-[26rem]  
          xs:w-[20rem] xs:h-[24rem]
          xxs:w-[16rem] xxs:h-[18rem]
          w-[14rem] h-[16rem]' onSubmit={handleSubmit}>
        <h3 className='text-3xl font-semibold'>SignUp</h3>

         <input className='xs:text-2xl border-b-2 border-gray-400 bg-gray-200  text-black outline-none
          xxs:text-xl' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />

         <input className='xs:text-2xl border-b-2 border-gray-400 bg-gray-200  text-black outline-none
          xxs:text-xl' type='text' value={uname} onChange={(e) => setUName(e.target.value)} placeholder='Username...' />

         <input className='xs:text-2xl border-b-2 border-gray-400 bg-gray-200  text-black outline-none
          xxs:text-xl' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />

        <button className='bg-blue-600 hover:opacity-90 text-white xs:text-xl xs:px-6 xs:py-2 rounded-lg
          xxs:text-lg xxs:px-4 xxs:py-1 px-2 py-1' type='submit' disabled = {isLoading} >Signup</button>
        
    </form>
    {error && <div className='error' >{error}</div>}
    </div>
    
  )
}

export default Signup