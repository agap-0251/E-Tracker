import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavContext } from "../hooks/useNavContext";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import Profile from "./Profile";


const NavContainer = () => {
  const [act, setAct] = useState(0);
  const [showNav,setShowNav] = useNavContext()
  const [postImage,setPostImage] = useState({myFile : ""})
  const { user,dispatch } = useAuthContext();
  const { logout } = useLogout();
  
  useEffect(() => {
    setPostImage({...postImage,myFile:user.uImage})
  },[user])

  function handleNav(n) {
    setAct(n);
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
    <>
      <div 
        className="bg-cblack-light shadow-inner shadow-black border-gray-300 text-white h-full 
            w-full rounded-3xl lg:block
          hidden 
         "
      >

        {/* profile + nav */}

        <div className="w-full grid grid-cols-1 grid-rows-6 items-center pl-10 pb-10">
          <h1
            className="glg:text-[3rem] text-corange-light
          lg:text-[2.5rem]"
          >
            E-Tracker
          </h1>

          <Profile user = {user} handleUpload={handleUpload} postImage={postImage} />

          <ul className="flex flex-col text-xl  justify-between mt-32 h-full row-span-3 text-cwheat-light">
            <li className={act === 0 ? "text-corange-light" : ""}>
              <NavLink
                onClick={() => {
                  handleNav(0);
                }}
                to={"/"}
                className="hover:text-gray-300  flex items-center"
              >
                <BsGraphUpArrow className="mr-1" /> Dashboard
              </NavLink>
            </li>
            <li className={act === 1 ? "text-corange-light" : ""}>
              <NavLink
                onClick={() => {
                  handleNav(1);
                }}
                to={"/transactions"}
                className="hover:text-gray-300 flex items-center"
              >
                <BiTransfer className="mr-1" /> Transactions
              </NavLink>
            </li>
            <li className={act === 2 ? "text-corange-light" : ""}>
              <NavLink
                onClick={() => {
                  handleNav(2);
                }}
                to={"/income"}
                className="hover:text-gray-300 flex items-center"
              >
                <FaMoneyCheck className="mr-1" /> Income
              </NavLink>
            </li>
            <li className={act === 3 ? "text-corange-light" : ""}>
              <NavLink
                onClick={() => {
                  handleNav(3);
                }}
                to={"/expense"}
                className="hover:text-gray-300 flex items-center"
              >
                <MdPayments className="mr-1" /> Expenses
              </NavLink>
            </li>
          </ul>
        </div>

        {/* signin / out */}
        <button
          onClick={handleClick}
          className="m-4 glg:py-3 glg:px-5 absolute glg:bottom-4 glg:left-10 bg-cyan-600 text-xl hover:bg-cyan-500 shadow-inner shadow-cyan-100 border-none outline-none rounded-full
        lg:py-2 lg:px-3 lg:bottom-4 lg:left-16"
          type="button"
        >
          
          SignOut
        </button>
      </div>
    </>
  );
};

export default NavContainer;

function convertToBase64(file) {
  return new Promise((resolve,reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
