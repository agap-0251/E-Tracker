import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuthContext } from '../hooks/useAuthContext';

// const data = [
//     {
//       name: '20/06/2023',
//       expense: 700,
//       income: 1000,
//     },
//     {
//       name: '21/06/2023',
//       expense: 800,
//       income: 0,
//     },
//     {
//       name: '22/06/2023',
//       expense: 100,
//       income: 0,
//     },
//     {
//       name: '23/06/2023',
//       expense: 200,
//       income: 1000,
//     },
//     {
//       name: '24/06/2023',
//       expense: 500,
//       income: 3000,
//     },
//     {
//       name: '25/06/2023',
//       expense: 1500,
//       income: 0,
//     },
//     {
//       name: '26/06/2023',
//       expense: 150,
//       income: 0,
//     },
//     {
//       name: '27/06/2023',
//       expense: 100,
//       income: 150,
//     },
    
//   ];

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
        <ResponsiveContainer className='p-1' width="100%" height="100%">
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
      );
}

export default Chart