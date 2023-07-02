import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavContext } from "../hooks/useNavContext";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const NavContainer = () => {
  const [act, setAct] = useState(0);
  const navigate = useNavigate();
  const [showNav,setShowNav] = useNavContext()
  const { user } = useAuthContext();
  const { logout } = useLogout();
  
  function handleNav(n) {
    setAct(n);
  }

  function handleClick(e) {
    e.preventDefault();
    logout();
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

          <div className=" py-3 flex items-center row-span-2">
            <svg
              className="p-1 glg:w-[5rem] glg:h-[5rem] bg-gray-500 shadow-lg shadow-black rounded-full
          lg:w-[4.5rem] lg:h-[4.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Filled stroke cutting expand"
              viewBox="0 0 512 512"
              id="handsome-man"
            >
              <path
                fill="#f29a49"
                d="M168,84V24H268a20,20,0,0,1,20,20v60H188A20,20,0,0,1,168,84Z"
              ></path>
              <path
                fill="#804913"
                d="M326,104H288V40l34.325,11.442A20,20,0,0,1,336,70.415V94A10,10,0,0,1,326,104Z"
              ></path>
              <path
                fill="#fac850"
                d="M200,24h36a20,20,0,0,1,20,20v60a0,0,0,0,1,0,0H220a20,20,0,0,1-20-20V24A0,0,0,0,1,200,24Z"
              ></path>
              <path
                fill="#f29a49"
                d="M64,488V380.522a30,30,0,0,1,19.127-27.96L208,304h96l124.873,48.562A30,30,0,0,1,448,380.522V488Z"
              ></path>
              <path
                fill="#804913"
                d="M184.042,349.319A51.864,51.864,0,0,0,223.964,368h64.072a52.017,52.017,0,0,0,51.969-50l-36-14H208l-36,14A51.849,51.849,0,0,0,184.042,349.319Z"
              ></path>
              <path
                fill="#ffd4cf"
                d="M288.036,336H223.964a20,20,0,0,1-19.677-23.578L216,248h80l11.713,64.422A20,20,0,0,1,288.036,336Z"
              ></path>
              <path
                fill="#fbb8b0"
                d="M296,248H216l-3.874,21.309,11.911,10.122A36.034,36.034,0,0,0,247.351,288H264.6a36.022,36.022,0,0,0,23.428-8.667L299.854,269.2Z"
              ></path>
              <path
                fill="#ffd4cf"
                d="M328,104H184V215.159a20,20,0,0,0,7.048,15.24L234.4,267.24A20,20,0,0,0,247.351,272H264.6a20,20,0,0,0,13.015-4.815l43.4-37.2A20,20,0,0,0,328,214.8Z"
              ></path>
              <path
                fill="#ffd4cf"
                d="M152,136h22a10,10,0,0,1,10,10v28a10,10,0,0,1-10,10H152a0,0,0,0,1,0,0V136A0,0,0,0,1,152,136Z"
                transform="rotate(-180 168 160)"
              ></path>
              <path
                fill="#ffd4cf"
                d="M338,136h22a0,0,0,0,1,0,0v48a0,0,0,0,1,0,0H338a10,10,0,0,1-10-10V146A10,10,0,0,1,338,136Z"
                transform="rotate(-180 344 160)"
              ></path>
              <rect width="16" height="24" x="280" y="144"></rect>
              <polygon points="232 168 216 168 216 144 224 144 232 144 232 168"></polygon>
              <path d="M224,208h64a0,0,0,0,1,0,0v0a24,24,0,0,1-24,24H248a24,24,0,0,1-24-24v0A0,0,0,0,1,224,208Z"></path>
              <rect width="48" height="16" x="304" y="424"></rect>
              <path d="M431.773,345.106l-88.854-34.555-.014,0-29.486-11.467-8.187-45.027,20.99-17.991A27.968,27.968,0,0,0,336,214.8V192h14a18.021,18.021,0,0,0,18-18V146a18.021,18.021,0,0,0-18-18H336V108.96A18,18,0,0,0,344,94V88H328v6a2,2,0,0,1-2,2H296V51.1l23.8,7.932A11.984,11.984,0,0,1,328,70.415V72h16V70.415a27.964,27.964,0,0,0-19.146-26.563L293.982,33.561A28.045,28.045,0,0,0,268,16H168a8,8,0,0,0-8,8V84a28.035,28.035,0,0,0,16,25.3V128H162a18.021,18.021,0,0,0-18,18v28a18.021,18.021,0,0,0,18,18h14v23.159a27.956,27.956,0,0,0,9.868,21.336l20.868,17.734-8.155,44.85L169.1,310.546l-.01,0L117.1,330.766l5.8,14.912,42.523-16.536A60,60,0,0,0,223.964,376h64.072a59.875,59.875,0,0,0,32-9.234L311.5,353.235A43.885,43.885,0,0,1,288.036,360H223.964a44.056,44.056,0,0,1-43.417-36.74l15.441-6A28.008,28.008,0,0,0,223.964,344h64.072a28.008,28.008,0,0,0,27.976-26.745l15.441,6a43.573,43.573,0,0,1-9.637,20.933L334.1,354.445a60.327,60.327,0,0,0,12.477-25.3l79.4,30.876A21.863,21.863,0,0,1,440,380.522V480H392V424H376v56H136V424H120v56H72V380.522a21.863,21.863,0,0,1,14.026-20.5l22.016-8.562-5.8-14.912-22.017,8.562A37.764,37.764,0,0,0,56,380.522V488a8,8,0,0,0,8,8H448a8,8,0,0,0,8-8V380.522A37.764,37.764,0,0,0,431.773,345.106ZM350,144a2,2,0,0,1,2,2v28a2,2,0,0,1-2,2H336V144ZM280,44V96H264V44a27.836,27.836,0,0,0-2.7-12H268A12.013,12.013,0,0,1,280,44ZM236,32a12.013,12.013,0,0,1,12,12V96H220a12.013,12.013,0,0,1-12-12V32Zm-60,0h16V84a27.836,27.836,0,0,0,2.7,12H188a12.013,12.013,0,0,1-12-12ZM162,176a2,2,0,0,1-2-2V146a2,2,0,0,1,2-2h14v32Zm30,39.159V112H320V214.8a11.982,11.982,0,0,1-4.191,9.111l-43.4,37.2A12.008,12.008,0,0,1,264.6,264H247.351a12.009,12.009,0,0,1-7.771-2.856L196.229,224.3A11.979,11.979,0,0,1,192,215.159Zm105.249,108.53A11.969,11.969,0,0,1,288.036,328H223.964a12,12,0,0,1-11.806-14.146l8.664-47.654,8.4,7.135A28.025,28.025,0,0,0,247.351,280H264.6a28.019,28.019,0,0,0,18.222-6.741l8.338-7.147,8.68,47.742A11.971,11.971,0,0,1,297.249,323.689Z"></path>
            </svg>
            <p
              className="glg:text-2xl text-gray-300 pl-5
            lg:text-xl"
            >
              {user.uname}
            </p>
          </div>

          <ul className="flex flex-col text-xl  justify-evenly h-full row-span-3 text-cwheat-light">
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
