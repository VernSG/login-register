import React from 'react';

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-xl font-semibold">Total: ${totalPrice}</p>
          <button
            onClick={checkout}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Checkout via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
