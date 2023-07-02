import {BsGraphUpArrow} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'
import {FaMoneyCheck} from 'react-icons/fa'
import {MdPayments} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useNavContext } from '../hooks/useNavContext'
import { useLogout } from "../hooks/useLogout";
 

const SideBar = () => {
  const [showNav,setShowNav] = useNavContext()
  const {logout} = useLogout()

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className='bg-cblack-lighter absolute left-0 top-0 translate-x transition-transform
    h-full z-10 w-[18rem] p-3 lg:hidden'>

    <div className="bg-cblack-light shadow-inner shadow-black border-gray-300 text-white h-full 
            w-full rounded-3xl">

<button onClick={() => setShowNav(showNav => !showNav)}>
          <svg
            className="w-6 h-6 text-white ml-5 mt-5"
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

      <ul className="
      flex flex-col text-xl justify-evenly  h-3/5 row-span-3 text-cwheat-light pl-5">
            <li className={"text-corange-light"}><NavLink  to={'/'} className="hover:text-gray-300  flex items-center"><BsGraphUpArrow className="mr-1" /> Dashboard</NavLink></li>
            <li className={"text-corange-light"}><NavLink  to={'/transactions'} className="hover:text-gray-300 flex items-center"><BiTransfer className="mr-1" /> Transactions</NavLink></li>
            <li className={"text-corange-light"}><NavLink  to={'/income'} className="hover:text-gray-300 flex items-center"><FaMoneyCheck className="mr-1" /> Income</NavLink></li>
            <li className={"text-corange-light"}><NavLink  to={'/expense'} className="hover:text-gray-300 flex items-center"><MdPayments className="mr-1" /> Expenses</NavLink></li>
      </ul>

      {/* signout */}

      <button
          onClick={handleClick}
          className="m-4 absolute bg-cyan-600 text-xl hover:bg-cyan-500 shadow-inner shadow-cyan-100 border-none outline-none rounded-full
        py-2 px-3 bottom-4 left-16
        "

          type="button"
        >
          
          SignOut
        </button>
    </div>

    </div>
  )



//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   return (
//     <nav className="bg-gray-400">
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
//         <div className="flex-shrink-0 font-bold tracking-wider">
//           LOGO
//         </div>
//         <div className="hidden lg:block">
//           <NavContainer />
//         </div>
//         <button
//           type="button"
//           className="lg:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
//           onClick={() => setShowMobileMenu(!showMobileMenu)}>
//           <svg
//             className="h-6 w-6"
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <div className="lg:hidden">
//         {showMobileMenu && <Menu />}
//       </div>
//     </nav>
//   );
}

export default SideBar;