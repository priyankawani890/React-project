import React from "react";

export default function CompareTable({ products, remove }) {
  return (
   <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
  <thead>
    <tr>
      {products.map((p) => (
        <th
          key={p.name}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f2f2f2',
            fontWeight: 'bold',
          }}
        >
          {p.name}
          <button
            onClick={() => remove(p)}
            style={{
              marginLeft: '10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      {products.map((p) => (
        <td key={p.name} style={{ border: '1px solid #ccc', padding: '10px' }}>
          Hours battery life: {p.batteryLife} h
        </td>
      ))}
    </tr>
    <tr>
      {products.map((p) => (
        <td key={p.name + '-screen'} style={{ border: '1px solid #ccc', padding: '10px' }}>
          Screen size: {p.screenSize}"
        </td>
      ))}
    </tr>
    <tr>
      {products.map((p) => (
        <td key={p.name + '-screen'} style={{ border: '1px solid #ccc', padding: '10px' }}>
          Price: {p.price}"
        </td>
      ))}
    </tr>
    
  </tbody>
</table>

  );
}
