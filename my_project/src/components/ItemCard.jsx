import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removefromCart ,decrementQty ,incrementQty} from "../redux/slices/CartSlice";


const ItemCard = ({id,name,price,img,qty}) => {

  const dispatch= useDispatch()
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2">
      <MdDelete 
            onClick={()=>{
              
            dispatch(removefromCart({id,img,name,price,qty}));
            toast("Item removed")
            }}
            className="absolute right-7 text-gray-600 cursor-pointer"/>
            
      <img src={img} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">

            <FaPlus  onClick={()=> qty >0 ? dispatch(incrementQty({id})) : qty=0} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear" />

            <span>{qty}</span>

            <FaMinus  onClick={()=> qty >1 ? dispatch(decrementQty({id})) : qty=0}className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
