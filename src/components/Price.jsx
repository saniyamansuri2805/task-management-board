import React from 'react'
import { useSelector } from 'react-redux';

const Price = ({ quantityId = ""}) => {
  const cartItems = useSelector((s) => s.cart);
  console.log("cartItems in food cart in price comp", cartItems);

  const item = cartItems.find((el) => el.id === quantityId);
  console.log("item in price comp", item);
  const { qty} = item || {};
  console.log("qty in price comp", qty);

  const subtotal =
     (cartItems.reduce((acc, item) => acc + Number(item.price), 0) );
  //  console.log("subtotal: ", subtotal);
  const deliveryCharge = 50;
  const tax = subtotal * 0.5;
  const total = Math.floor((qty || 1) * subtotal + tax + deliveryCharge);
  return (
    <div>
      <div className="w-full border-t-2 border-gray-400 mt-7 p-3">
        <div className="flex justify-between text-lg font-semibold">
          <div>Subtotal:</div>
          <div className="text-green-500">Rs.{ (qty || 1) *subtotal}/-</div>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <div>Delivery Charge:</div>
          <div className="text-green-500">Rs.{deliveryCharge}/-</div>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <div>Tax:</div>
          <div className="text-green-500">Rs.{tax}/-</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-lg font-bold mt-4 p-3 border-t-2 border-gray-400">
          <div>Total:</div>
          <div className="text-green-500">Rs.{total}/-</div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-[80%] bg-green-400 p-5 rounded-lg mt-7 text-white font-bold hover:bg-green-500">
          Place order
        </button>
      </div>
    </div>
  );
};

export default Price