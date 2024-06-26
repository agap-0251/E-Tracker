import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { formatDistanceToNow } from "date-fns";
import { showDeleteMsg } from "./ToastMsg";

const TransBlock = ({ trans }) => {
  const { user } = useAuthContext();
  const { dispatch } = useExpenseContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const res = await fetch("https://exp-backend.onrender.com/api/expenses/" + trans._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
    if (res.ok) {
      console.log(json);
      dispatch({ type: "DELETE_EXPENSE", payload: trans._id });
      showDeleteMsg()
    }
  };

  return (
    <div
      className={
        trans.isIncome
          ? 
          "flex flex-col justify-between bg-cgreen-dark my-1 p-3 rounded-lg mx-1 xs:p-2 xxs:p-1"
          : 
          "flex flex-col justify-between bg-corange-light my-1 p-3 rounded-lg mx-1 xs:p-2 xxs:p-1"
      }
    >
      <div className="flex justify-between m-2">
        <h1 className="text-3xl font-medium xs:text-2xl
          xxs:text-2xl">{trans.title}</h1>
        <p className="text-2xl xs:texl-xl
          xxs:text-xl">{trans.amount}</p>
      </div>
      <div className="flex justify-between m-2">
        <div className="flex">
          <p className="opacity-80 mr-8">{trans.category}</p>
          <p className="opacity-80">
            {formatDistanceToNow(new Date(trans.payDate), { addSuffix: true })}
          </p>
        </div>
        <AiFillDelete
          onClick={handleDelete}
          className="bg-cblack-light text-[2.4rem] xxs:text-[2rem] p-1 rounded-lg cursor-pointer hover:bg-white hover:text-cblack-light"
        />
      </div>
    </div>
  );
};
export default TransBlock;
