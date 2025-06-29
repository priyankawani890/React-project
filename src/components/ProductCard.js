import React from "react";
import "../styles/ProductCard.css";

export default function ProductCard({
  product,
  compareList,
  setCompareList,
}) {
  const isAdded = compareList.some((p) => p.name === product.name);

  const toggleCompare = () => {
    if (isAdded) {
      setCompareList(compareList.filter((p) => p.name !== product.name));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <p>{product.batteryLife} hours battery life</p>
      <p>{product.screenSize} inches screen</p>

      <button
        onClick={toggleCompare}
        className={isAdded ? "btn-remove" : "btn-add"}
      >
        {isAdded ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
}
