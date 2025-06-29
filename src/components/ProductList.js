import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  compareList,
  setCompareList,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          compareList={compareList}
          setCompareList={setCompareList}
        />
      ))}
    </div>
  );
}
