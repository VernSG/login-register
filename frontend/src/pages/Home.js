import React from 'react';

const Home = () => {
  // Contoh daftar produk (biasanya ini akan diambil dari backend)
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 150 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 120 },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
