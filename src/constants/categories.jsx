 import React from "react";
 import { TiThSmallOutline } from "react-icons/ti";
 import { MdOutlineFreeBreakfast } from "react-icons/md";
 import { TbSoup } from "react-icons/tb";
 import { CiBowlNoodles } from "react-icons/ci";
 import { MdFoodBank } from "react-icons/md";
 import { GiFullPizza } from "react-icons/gi";
 import { GiHamburger } from "react-icons/gi";
 const categories = [
   {
     id: 1,
     name: "All",
     // icon: () =>{
     //     return(<TiThSmallOutline className="w-[30px] h-[30px] text-green-500" />)
     // }
     icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-500" />,
     label: "all",
   },
   {
     id: 2,
     name: "Breakfast",
     icon: (
       <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500" />
     ),
     label: "breakfast",
   },
   {
     id: 3,
     name: "Soups",
     icon: <TbSoup className="w-[60px] h-[60px] text-green-500" />,
     label: "soups",
   },
   {
     id: 4,
     name: "Pasta",
     icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />,
     label: "pasta",
   },
   {
     id: 5,
     name: "Main Course",
     icon: <MdFoodBank className="w-[60px] h-[60px] text-green-500" />,
     label: "main_course",
   },
   {
     id: 6,
     name: "Pizza",
     icon: <GiFullPizza className="w-[60px] h-[60px] text-green-500" />,
     label: "pizza",
   },
   {
     id: 7,
     name: "Burger",
     icon: <GiHamburger className="w-[60px] h-[60px] text-green-500" />,
     label: "burger",
   },
 ];

export default categories;