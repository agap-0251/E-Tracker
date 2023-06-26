import React, { useState } from 'react'
import "../components/login.css"
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,isLoading,error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login({email,password})
    }

  return (
    <div className="login-container">
        <form className='login-form' onSubmit={handleSubmit}>
        <h3>Login</h3>

         <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />

      
         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />

        <button type='submit' disabled = {isLoading} >Login</button>
    </form>
    {error && <div className='error'>{error}</div>}
    </div>
    
  )
}

export default Login