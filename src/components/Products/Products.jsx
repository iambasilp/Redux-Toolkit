import React from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../../content/index";
const Products = () => {
  return (
    <div className="container text-white mt-12">
      <div className="text-left text-[34px] mb-3">Our Products</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ProductList.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
