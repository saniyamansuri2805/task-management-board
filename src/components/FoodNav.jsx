import React from 'react'
import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";

const FoodNav = () => {
  return (
    <div className="w-full h-[100px] flex flex-row justify-between items-center px-5">
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <div className="flex flex-row items-center px-5 bg-white gap-2 rounded-md shadow-xl w-[60%] h-[60px]">
        <div>
          <IoSearchOutline className="w-[30px] h-[30px] text-green-500" />
        </div>
        <div>
          <input type="text" placeholder="Search food..." className="w-[100%] h-[100%] focus:outline-none" />
        </div>
      </div>
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-md shadow-xl">
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default FoodNav