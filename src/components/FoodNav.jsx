import React from 'react'
import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const FoodNav = ({ onSearchInputChange = () => {}, onCartClick =() =>{} }) => {

  const cartItems = useSelector((s) => s.cart);
  // console.log("Cart items in FoodNav: ", cartItems);

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
          <input
            type="text"
            placeholder="Search food..."
            className="w-[100%] h-[100%] focus:outline-none"
            onChange={(e) => {
              onSearchInputChange(e);
            }}
          />
        </div>
      </div>
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-md shadow-xl relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold">
          {cartItems.length}
        </span>
        <LuShoppingBag
          className="w-[30px] h-[30px] text-green-500"
          onClick={() => {
            onCartClick();
          }}
        />
      </div>
    </div>
  );
};

export default FoodNav