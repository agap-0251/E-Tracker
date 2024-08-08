import {Routes,Route,Navigate, redirect} from 'react-router-dom'
import Home from './pages/Home'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Transactions from './pages/Transactions'
import LandingPage from './pages/LandingPage'
import { useAuthContext } from "./hooks/useAuthContext"
import MainContainer from './components/MainContainer'
import { useEffect, useState } from 'react'
import { useExpenseContext } from './hooks/useExpenseContext'
import { usePathContext } from './hooks/usePathContext'



function App() {

  const {user,isLoading} = useAuthContext()
  const {path,setPath} = usePathContext();
  const {expenses, dispatch } = useExpenseContext();
  console.log(isLoading)
  if(isLoading)
    return <p>...Loading</p>

  return (
    <div className='min-h-[100vh]'>
      <Routes>
        <Route path='/'  element = { <MainContainer children={<Home />} />} />
        <Route path = '/transactions'  element = {<MainContainer children={<Transactions />} /> } />
        <Route path = '/income'  element = { <MainContainer children={<Income />} />} />
        <Route path = '/expense'  element = { <MainContainer children={<Expense />} />} />
        <Route path="/register" element = {(!user) ? <LandingPage />  : <Navigate to={`${path}`} />} />

      </Routes>
    </div>
  )
}

export default App
