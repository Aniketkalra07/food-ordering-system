import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../FoodData.js";
import toast ,{ Toaster} from "react-hot-toast";




const FoodItems = () => {
  const handleToast=()=> toast.success("item added to cart");
  
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className="flex flex-wrap gap-10">
      {FoodData.map((food) => {
        return(
        <FoodCard
          key={food.id}
          food={food}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          handleToast={handleToast}
        />);
      })}
    </div>
    </>
  );
};

export default FoodItems;
