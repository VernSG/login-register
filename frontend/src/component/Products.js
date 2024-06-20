import React from 'react';

const Products = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={product.image} alt={product.name} className="mb-2" />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-blue-500 font-semibold mb-2">${product.price}</p>
          <button
            onClick={() => addToCart(product.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
