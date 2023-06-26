import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Transactions from './pages/Transactions'
import { useAuthContext } from "./hooks/useAuthContext"
import MainContainer from './components/MainContainer'

function App() {

  const {user} = useAuthContext()

  return (
    <div className=''>
      <Routes>
        <Route path='/'  element = {(user) ? <MainContainer children={<Home />} /> : <Navigate to="/user/login" />} />
        <Route path = '/transactions'  element = {(user) ?<MainContainer children={<Transactions />} /> : <Navigate to="/user/login" />} />
        <Route path = '/income'  element = {(user) ? <MainContainer children={<Income />} /> : <Navigate to="/user/login" />} />
        <Route path = '/expense'  element = {(user) ? <MainContainer children={<Expense />} /> : <Navigate to="/user/login" />} />
        <Route path="/user/login" element = {(!user) ? <Login /> : <Navigate to="/" />} />
        <Route path="/user/signup" element = {(!user) ? <Signup /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
