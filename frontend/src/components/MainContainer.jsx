import React from 'react'
import NavContainer from './NavContainer'
import SideBar from './SideBar'
import {useNavContext} from '../hooks/useNavContext'

const MenuIcon = ({showNav,setShowNav}) => {
  return (
    <div className='lg:hidden flex items-center '>
      <button className='lg:hidden flex items-center justify-center' onClick={() => setShowNav(showNav => !showNav)}>
      <svg
        className="sm:w-10 sm:h-10 absolute top-2 left-2 text-white ml-5 sm:mt-6
          xs:w-7 xs:h-7 xs:mt-5
          xxs:w-6 xxs:h-6 xxs:mt-[1.2rem]
          w-6 h-6 mt-5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
      <h2 className='sm:text-[2.7rem] text-corange-light sm:ml-16
        xs:text-[2rem] xs:ml-12
        xxs:text-[1.7rem] xxs:ml-10 xxs:mt-[0.1rem]
        text-[1.7rem] ml-10 mt-[0.1rem]'>E-Tracker</h2>
    </div>
  )
}



const MainContainer = ({children}) => {
  const [showNav,setShowNav] = useNavContext()

  return (
    <div className='lg:grid lg:grid-cols-4 min-h-[100vh] gap-3 p-[1rem] bg-cblack-lighter block'>
      <MenuIcon showNav={showNav} setShowNav={setShowNav} />
      {showNav && <SideBar />}
      <NavContainer />
      {children}
    </div>
  )
}

export default MainContainer