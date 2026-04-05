import React from 'react'
import FoodNav from '../components/FoodNav'
import categories from '../constants/categories'
import FoodCard from "../components/FoodCrad";
import foodItems from '../constants/FoodItems';
import FoodCart from '../components/FoodCart';
import Price from '../components/Price';

//  import { TiThSmallOutline } from "react-icons/ti";

const FoodHome = () => {
 const [newFoodItems, setNewFoodItems] = React.useState(foodItems)
 const [showCart, setShowCart] = React.useState(false)
  

 const onSearchInputChange = (e) => {
  // console.log("onSearchInputChange", e.target.value);
  if(e.target.value.trim() === ""){
    setNewFoodItems(foodItems)
    return;
  }
  const filteredFoodItems = foodItems.filter((foodItem) => {    return foodItem.food_name.trim().toLowerCase().includes(e.target.value.toLowerCase());
  });
  console.log("filteredFoodItems", filteredFoodItems);
  setNewFoodItems(filteredFoodItems);
 }  


 const onCategoryCardClick = (categoryLabel) => {
    console.log("onCategoryCardClick", categoryLabel);
    if(categoryLabel === "all"){
      setNewFoodItems(foodItems)
      return;
    }
    const filteredFoodItems = foodItems.filter((foodItem) => {
      return foodItem.food_category === categoryLabel;
    });
    setNewFoodItems(filteredFoodItems);
 }

 const onCloseCart = () => {
    console.log("onCloseCart- food home");
    setShowCart(false)
 }

 const onCartClick = () => {
    // console.log("onCartClick");
    setShowCart(true)
 }
    
  return (
    <div>
      <FoodNav
        onSearchInputChange={(e) => {
          onSearchInputChange(e);
        }}
        onCartClick={() =>{
            onCartClick()
        }}
      />
      <div className="flex flex-wrap justify-center items-center gap-5">
        {categories.map((category) => {
          return (
            <div
              className="w-[150px] h-[150px] bg-white flex flex-col gap-5 justify-center items-center rounded-xl shadow-lg text-[20px] font-semibold text-gray-600 hover:bg-green-200 cursor-pointer"
              onClick={() => {
                onCategoryCardClick(category?.label);
              }}
            >
              {category?.icon}
              {/* <TiThSmallOutline /> */}
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5 px-5">
        {newFoodItems.map((foodItem) => {
          return (
            <FoodCard
              name={foodItem.food_name}
              price={foodItem.price}
              type={foodItem.food_type}
              id={foodItem.id}
              image={foodItem.food_image}
            />
          );
        })}
        <FoodCard />
      </div>
      <div>
        {showCart && 
          
        <FoodCart onCloseCart={()=>{
            onCloseCart()

        }} />
        }
      </div>
    </div>
  );
}

export default FoodHome