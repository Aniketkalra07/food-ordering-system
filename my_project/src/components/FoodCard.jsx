import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({id,name,price,img,handleToast }) =>{
  const dispatch= useDispatch();
  return(
    <div className="font-bold w-[250px] bg-white p-5 flea-col gap-2 rounded -lg">
      <img 
      src={img} 
      className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all dur-500"/>
      <div>
        <h2>{name}</h2>
        <span > ₹{price} </span>
     
        <button onClick={()=>{
          dispatch(addToCart({id,name,price,qty:1,img}));
          handleToast();
        }} className="p-1 text-white bg-green-500 rounded-lg text-sm hover:bg-red-600">Add to cart</button>
      </div>
    </div>
  )

}

export default FoodCard;