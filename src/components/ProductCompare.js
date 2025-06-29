import React from 'react';
import './ProductCompare.css';

const formatFeatureName = (key) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

const ProductCompare = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products selected for comparison.</p>;
  }

  const excludeKeys = ['id', 'image', 'name'];
  const featureKeys = Object.keys(products[0]).filter(
    key => !excludeKeys.includes(key)
  );

  return (
    <div className="product-compare-container">
      <h2>Product Comparison</h2>
      <table className="product-compare-table">
  <thead>
    <tr>
      <th>Features</th>
      {products.map((product, index) => (
        <th key={index}>{product.name}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {featureKeys.map((key) => (
      <tr key={key}>
        <td className="feature-name">{formatFeatureName(key)}</td>
        {products.map((product, index) => (
          <td key={index}>{product[key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default ProductCompare;
