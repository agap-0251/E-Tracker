import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuthContext } from '../hooks/useAuthContext';

const Chart = () => {
    const {user} = useAuthContext()
    const [data,setData] = useState([])
    useEffect(() => {
      const fetchExpenses = async () => {
        const res = await fetch('/api/expenses/weekly',{
            headers : {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await res.json()
        // console.log(json)
        if(res.ok) {
           setData(json)
        }
    }
    if(user) {
        fetchExpenses()
    }
    },[])

    return (
      <div className='border-box 
      md:col-span-1
      sm:col-span-2 sm:max-w-[28rem]'>
         <h1 className='text-3xl text-cgreen-light my-2 ml-6'>Weekly Analysis</h1>
          <ResponsiveContainer className='p-1
            2xl:max-h-[23rem]
            xl:max-h-[23rem]
            sm:h-[29rem]
            md:max-h-[21rem]' width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 15,
                right: 50,
                left: 0,
                bottom: 0,
              }}
            >

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Expense" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
      </div>
      );
}

export default Chart