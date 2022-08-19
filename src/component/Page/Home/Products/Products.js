import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProducts] = useProducts();

  return (
    <div className="grid grid-cols-3 gap-10">
      {allProducts?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Products;
