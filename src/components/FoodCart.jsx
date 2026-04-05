import React from 'react'
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from "../assets/image1.avif"
import { useDispatch, useSelector } from "react-redux";
import { DecrementQty, IncreamentQty, RemoveItem } from '../features/cartSlice';
import Price from './Price';

const FoodCart = ({onCloseCart = () => {}}) => {
  console.log("food cart on close cart function ",onCloseCart)
  const cartItems = useSelector((s) => s.cart);
  const dispatch = useDispatch()
  console.log("cartItems in food cart ", cartItems);
  const [quantityId,setQuantityId] = React.useState("");

  const onDeleteItemClick = (id) => {
    console.log("Delete item with id: ", id);
    dispatch(RemoveItem({id: id}))
  }

  const onIncreament = (id) =>{
    console.log("Increament qty for item with id: ", id);
    dispatch(IncreamentQty({id: id}))

    setQuantityId(id)
  }

  const onDecreament = (id) =>{
      console.log("Decreament qty for item with id: ", id);
       const item = cartItems.find((el) => el.id === quantityId);
       console.log("item in price comp", item);
       const { qty } = item || {};
       if(qty >1){
        dispatch(DecrementQty({ id: id }));
       }
      

      setQuantityId(id)
  }
  return (
    <div className="w-[40vw] h-[100%] bg-white fixed top-0 right-0 shadow-lg rounded-xl p-5 overflow-y-scroll">
      <div className="flex justify-between font-bold text-green-500 text-[24px]">
        <div>Ordered Items</div>
        <div
          onClick={() => {
            console.log("going to call onClose cart in food cart", onCloseCart);
            onCloseCart();
          }}
        >
          <IoClose className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>

      {(cartItems || []).map((cartItem) => {
        return (
          <div className="h-[130px]  flex flex-row  p-2 gap-5 shadow-lg mt-5">
            <div className="flex w-[60%] h-full  gap-5">
              <div className="w-[60%] h-full overflow-hidden rounded-lg">
                <img
                  src={cartItem?.image}
                  className=" rounded-lg object-cover"
                />
              </div>

              <div className="w-[40%] flex flex-col">
                <div className="font-bold text-lg text-gray-600">
                  {cartItem?.name}
                </div>
                <div className="bg-slate-400 w-[110px] h-[50px] flex rounded-lg overflow-hidden shadow-lg border border-green-500 text-green-500 text-xl">
                  <button className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200" onClick={()=>{
                    onDecreament(cartItem?.id);
                  }}>
                    -
                  </button>
                  <span className="w-[40%] h-full bg-slate-300 flex items-center justify-center">
                    {cartItem?.qty}
                  </span>
                  <button
                    className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200"
                    onClick={() => {
                      onIncreament(cartItem?.id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[40%] flex flex-col justify-start items-end gap-5">
              <div className="font-bold text-lg text-gray-600">
                Rs.{cartItem?.price}
              </div>
              <div
                className="text-red-500 flex items-center text-xl cursor-pointer h-[40px] w-[40px]"
                onClick={() => {
                  onDeleteItemClick(cartItem?.id);
                }}
              >
                <RiDeleteBin6Line className="h-full w-full" />
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="h-[130px]  flex flex-row  p-2 gap-5 shadow-lg">
        <div className="flex w-[60%] h-full  gap-5">
          <div className="w-[60%] h-full overflow-hidden rounded-lg">
            <img src={image1} className=" rounded-lg object-cover" />
          </div>

          <div className="w-[40%] flex flex-col">
            <div className="font-bold text-lg text-gray-600">Panckacke</div>
            <div className="bg-slate-400 w-[110px] h-[50px] flex rounded-lg overflow-hidden shadow-lg border border-green-500 text-green-500 text-xl">
              <button className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200">
                -
              </button>
              <span className="w-[40%] h-full bg-slate-300 flex items-center justify-center">
                1
              </span>
              <button className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-start items-end gap-5">
          <div className="font-bold text-lg text-gray-600">Rs.120</div>
          <div className="text-red-500 flex items-center text-xl cursor-pointer h-[40px] w-[40px]">
            <RiDeleteBin6Line className='h-full w-full'/>
          </div>
        </div>
      </div> */}

      <div>
        <Price quantityId={quantityId} />
      </div>
    </div>
  );
};

export default FoodCart