import React, { useState } from "react";
import BeforeCart from './BeforeCart'
import AfterCart from "./AfterCart";
const ProductCard = ({ id, title, image }) => {
    const [count,setCount] = useState(0)
    const addToCart = ()=>{
        setCount(count)
    }
  return (
    <div className="border   ouline-none border-transparent ">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt=""
          srcset=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="text-left">
        <h1 className="text-xl mt-2">{title}</h1>
        <p className="text-white/[.7] w-full ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <div className="">
        {count > 0 ? <AfterCart/>  : <BeforeCart addToCart={addToCart} /> }
    
      </div>
    </div>
  );
};

export default ProductCard;
