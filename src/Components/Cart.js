// Cart.js

import React from 'react';

const Cart = () => {
  // Sample data, replace this with your actual cart data
  const cartItems = [
    { id: 1, name: 'Food Item 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Food Item 2', price: 8.99, quantity: 2 },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="food-item.jpg" alt="Food Item" className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500 focus:outline-none">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="text-gray-500 focus:outline-none">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
