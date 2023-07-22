import React, { useEffect } from "react";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Chart from "../components/Chart";
import TransBlock from "../components/TransBlock";
import TotalBlock from "../components/TotalBlock";
import { useNavContext } from "../hooks/useNavContext";
import "../components/chart.css"
import { ToastContainer } from "react-toastify";


const RecentBlock = ({ arr }) => {
  return (
    <div
      className="p-0 overflow-y-auto scroll max-h-[29rem] shadow-inner shadow-black ml-1
      xl:max-h-[23rem] 
      md:col-span-1 md:mt-0
      sm:col-span-2 sm:h-[24rem] sm:mt-10  sm:px-6
      xs:h-[24rem] xs:mt-24 xs:px-6
      xxs:h-[24rem] xxs:mt-24 xxs:px-6
      vs:h-[24rem] vs:mt-24 vs:px-6
      lg:col-span-1 lg:h-[24rem]  lg:px-6
      "
    >
      <h1
        className="text-3xl text-cgreen-light my-3
      xl:mb-6"
      >
        Recent History
      </h1>
      {arr
        ?.filter((trans, index) => index < 5)
        .map((trans) => (
          <TransBlock key={trans._id} trans={trans} />
        ))}
    </div>
  );
};

const Home = () => {
  const { expenses, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [showNav] = useNavContext();

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await fetch(
        " https://exp-backend.onrender.com/api/expenses",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await res.json();
      // console.log(json)
      if (res.ok) {
        dispatch({ type: "SET_EXPENSES", payload: json });
      }
    };
    if (user) {
      fetchExpenses();
    }
  }, [dispatch, user]);

  useEffect(() => {
    if(showNav) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "visible";
      
    }
  },[showNav])



  const style = "bg-cblack-light md:h-[100vh] shadow-inner shadow-black lg:col-span-3 border-gray-300 text-white rounded-3xl md:grid md:grid-cols-2 md:grid-rows-2\
   sm:grid sm:grid-rows-3 sm:max-h-[140vh] sm:min-h-[100vh] \
  xs:flex xs:flex-col xs:max-h-[145vh] xs:min-h-[100vh]  overflow-x-hidden\
 vs:flex vs:flex-col vs:max-h-[145vh] vs:min-h-[100vh]"



  return (
    <div
    className= {style}
    >
      <Chart />
      <RecentBlock arr={expenses} />
      <div 
        className="col-span-2 mb-32 sm:grid sm:grid-cols-2 sm:grid-rows-1 
        sm:mt-20 sm:mb-24
        vs:mt-8 vs:mb-[-1rem] vs:flex vs:flex-col 
        " 
      >
        <TotalBlock income={true} />
        <TotalBlock income={false} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
