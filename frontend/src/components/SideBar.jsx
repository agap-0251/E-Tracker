import {BsGraphUpArrow} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'
import {FaMoneyCheck} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {MdPayments} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useNavContext } from '../hooks/useNavContext'
import { useLogout } from "../hooks/useLogout";
import Profile from "./Profile"
import { useAuthContext } from '../hooks/useAuthContext'
import { useState,useEffect } from 'react'
 

const SideBar = () => {
  const [showNav,setShowNav] = useNavContext()
  const {logout} = useLogout()
  const [postImage,setPostImage] = useState({myFile : ""})
  const { user,dispatch } = useAuthContext();
    
  useEffect(() => {
    setPostImage({...postImage,myFile:user.uImage})
  },[user])

  function handleNav() {
    setShowNav(false);
  }

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  const uploadImage = async (base64) => {
    const {email} = user
    // console.log(base64)
    const res = await fetch('/api/user/image',{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({email,base64})
    })
    const json = await res.json()
    if(res.ok) {
      setPostImage({...postImage,myFile : base64})
      dispatch({type:'LOGIN',payload : {...user,json}})
    }
    if(!res.ok) {
      console.log(json.error)

    }
}

  const handleUpload = async(e) => {
    e.preventDefault();
    const file = e.target.files[0]
    const base64 = await convertToBase64(file);
    uploadImage(base64)
  }

  return (
    <div className='bg-cblack-lighter absolute left-0 top-0 translate-x transition-transform
    h-full z-10 w-[18rem] p-3 lg:hidden'>

    <div className="bg-cblack-light shadow-inner shadow-black border-gray-300 text-white h-full 
            w-full rounded-3xl">

<button onClick={() => setShowNav(showNav => !showNav)}>
          <AiOutlineClose className="w-8 h-8 text-white ml-5 mt-5" />
        </button>

        <Profile user = {user} handleUpload={handleUpload} postImage={postImage} />

      <ul className="
      flex flex-col text-xl justify-center  h-3/5 row-span-3 text-cwheat-light pl-12">
            <li className={"text-corange-light my-9"}><NavLink onClick={handleNav}  to={'/'} className="hover:text-gray-300  flex items-center"><BsGraphUpArrow className="mr-1" /> Dashboard</NavLink></li>
            <li className={"text-corange-light my-9"}><NavLink onClick={handleNav}  to={'/transactions'} className="hover:text-gray-300 flex items-center"><BiTransfer className="mr-1" /> Transactions</NavLink></li>
            <li className={"text-corange-light my-9"}><NavLink onClick={handleNav}  to={'/income'} className="hover:text-gray-300 flex items-center"><FaMoneyCheck className="mr-1" /> Income</NavLink></li>
            <li className={"text-corange-light my-9"}><NavLink onClick={handleNav}  to={'/expense'} className="hover:text-gray-300 flex items-center"><MdPayments className="mr-1" /> Expenses</NavLink></li>
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

}

export default SideBar;