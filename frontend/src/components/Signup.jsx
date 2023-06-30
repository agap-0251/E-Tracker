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
    <div className="signup-container">
        <form className='signup-form' onSubmit={handleSubmit}>
        <h3>SignUp</h3>

         <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />
         <input type='text' value={uname} onChange={(e) => setUName(e.target.value)} placeholder='Username...' />

      
         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />

        <button type='submit' disabled = {isLoading} >Signup</button>
        
    </form>
    {error && <div className='error' >{error}</div>}
    </div>
    
  )
}

export default Signup