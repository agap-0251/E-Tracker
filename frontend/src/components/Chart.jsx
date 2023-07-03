import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuthContext } from '../hooks/useAuthContext';
import "./chart.css"

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
      <div className='border-box min-h-[20rem] mr-1 shadow-inner shadow-black
      lg:w-full lg:h-full
      xl:h-[23rem] xl:mt-0
      md:col-span-1 md:max-w-full md:h-[24rem] md:shadow-inner md:shadow-black
      sm:col-span-2 sm:max-w-[28rem] sm:mr-0 sm:shadow-none sm:[margin:auto]
      xs:[margin:auto]
      vs:max-w-[28rem] vs:h-[10rem] vs:mr-0 vs:shadow-none
      '>
         <h1 className='text-3xl text-cgreen-light my-2 ml-6'>Weekly Analysis</h1>
          <ResponsiveContainer className='p-1 w-full h-full 

            xl:max-h-[19rem]
            lg:max-h-[20rem]
            sm:h-[29rem]
            md:max-h-[20rem]
            xs:h-[10rem]
            vs:h-[8rem] vs:text-sm
            
            ' >
            <LineChart
              className=''
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