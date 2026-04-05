import React from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../features/cartSlice';

const FoodCard = ({ name ="", price ="", type ="", id ="", image ="..." }) => {

  const dispatch = useDispatch()
  let qty = 1;

  const onAddToCartClick = (idPassed,namePassed,pricePassed,typePassed,imagePassed,qtyPassed) =>{
    console.log("Add to cart clicked for item with id: ", id);
    dispatch(AddItem({ id: idPassed, name: namePassed, price: pricePassed, type: typePassed, image: imagePassed, qty: qtyPassed }));
  }
  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4 hover:border-2 border-green-500 cursor-pointer">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="flex flex-row justify-between items-center text-green-500 font-semibold text-lg">
        <div>${price}</div>
        <div className="flex flex-row gap-3 items-center justify-center ">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          {/* <LuLeafyGreen /> */}
          <span>{type}</span>
        </div>
      </div>

      <button className="bg-green-300 p-3 rounded-lg text-gray-700 hover:bg-green-400" onClick={()=>{
        onAddToCartClick(id,name,price,type,image,qty)
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;