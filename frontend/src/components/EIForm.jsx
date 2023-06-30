import React,{useState} from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useExpenseContext } from '../hooks/useExpenseContext'

const EIForm = ({isIn}) => {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [payDate,setPayDate] = useState('')
    const [category,setCategory] = useState('')
    const [isIncome,setIsIncome] = useState(isIn)
    const {user} = useAuthContext()
    const {expenses,dispatch} = useExpenseContext()

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const expense = {title,amount,payDate,isIncome,category}
        // console.log(expense)
        const res = await fetch('/api/expenses',{
            method : 'POST',
            body : JSON.stringify(expense),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await res.json()
        console.log(json)
        if(res.ok) {
            setAmount('');
            setCategory('');
            setPayDate('');
            setTitle('');
            dispatch({type : 'CREATE_EXPENSE',payload : json})
        }
        
    }


  return (
    <div className='shadow-inner shadow-black border-gray-400 '>
        <h1 className='text-[#4fce4f] font-semibold pl-4 pt-3 text-3xl' >{isIncome ? 'Income' : 'Expense'}</h1>
        <form className='flex flex-col text-2xl items-start pl-10 pb-4 justify-evenly  h-full' onSubmit={handleSubmit}>
            <input value = {title} onChange={(e) => {setTitle(e.target.value)}} className='bg-cblack-light border-b-2 border-gray-500' type="text" placeholder='Title' />
            <input value = {amount} onChange={(e) => {setAmount(e.target.value)}} className='bg-cblack-light border-b-2 border-gray-500' type="text" placeholder='Amount' />
            <input value = {payDate} onChange={(e) => {setPayDate(e.target.value)}} className='bg-cblack-light border-b-2  border-gray-500' type='date' placeholder='Select Date' />
            <select id="category" value={category} onChange={(e) => {setCategory(e.target.value)}} className="bg-cblack-light border-gray-500 border-2 placeholder:text-gray-200">
                <option defaultValue= '' disabled = {true} value=''>Category</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Clothing">Clothing</option>
                <option value="Travelling">Travelling</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
            </select>
            <button className='bg-cgreen-dark shadow-inner shadow-green-100 opacity-80 py-2 px-3 rounded-full hover:opacity-90 '>{isIncome ? 'Add Income' : 'Add Expense'}</button>
        </form>
    </div>
  )
}

export default EIForm