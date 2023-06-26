import React from 'react'
import NavContainer from './NavContainer'

const MainContainer = ({children}) => {
  return (
    <div className='grid grid-cols-4 h-[100vh] gap-3 p-3 bg-[#2b2a2a]'>
      <NavContainer />
      {children}
    </div>
  )
}

export default MainContainer