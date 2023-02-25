import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
const BeforeCart = ({addToCart}) => {
  return (
    <button class="flex items-center gap-2 text-left mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={addToCart}>
      Add To Cart 
      <AiOutlineShoppingCart size={22} />
    </button>
  );
};
export default  BeforeCart