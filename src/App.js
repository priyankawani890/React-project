import React, { useState } from "react";
import "./styles/App.css";

import ProductList  from "./components/ProductList";
import CompareTable from "./components/CompareTable";
import SearchBar    from "./components/SearchBar";
import ToggleMode   from "./components/ToggleMode";

export default function App() {
  const [compareList, setCompareList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

//data
  const products = [
    {
      name: "iPhone 14",
      brand: "Apple",
      image: "/images/iphone-14.webp",
      price: "$799",
      batteryLife: 20,
      screenSize: 6.1,
    },
    {
      name: "Galaxy S23",
      brand: "Samsung",
      image: "/images/samsung-galaxy.jpg",
      price: "$749",
      batteryLife: 22,
      screenSize: 6.1,
    },
    {
      name: "OnePlus 11",
      brand: "OnePlus",
      image: "/images/OnePlus 11.jpg",
      price: "$699",
      batteryLife: 23,
      screenSize: 6.7,
    },
    {
      name: "Pixel 8",
      brand: "Google",
      image: "/images/Pixel 8.jpg",
      price: "$699",
      batteryLife: 24,
      screenSize: 6.2,
    },
    {
      name: "iPhone SE (2022)",
      brand: "Apple",
      image: "/images/iPhone SE (2022).avif",
      price: "$429",
      batteryLife: 15,
      screenSize: 4.7,
    },
    {
      name: "Galaxy A54",
      brand: "Samsung",
      image: "/images/Galaxy A54.jpg",
      price: "$449",
      batteryLife: 25,
      screenSize: 6.4,
    },
  ];


 

  const removeFromCompare = (p) => {
    setCompareList(compareList.filter((item) => item.name !== p.name));
  };
  /* ---- */

  /* --- search filtering -- */
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  /* ----- */

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__logo">📱 Phone Compare</h1>
        <ToggleMode />
      </header>

      <div className="app__search">
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </div>

      <ProductList
        products={filteredProducts}
        compareList={compareList}
        setCompareList={setCompareList}
      />

      {compareList.length > 1 && (
        <section className="app__compare">
          <h2 className="app__sectionTitle">
            Compare ({compareList.length})
          </h2>
          <CompareTable
            products={compareList}
            remove={removeFromCompare}
          />
        </section>
      )}
    </div>
  );
}
