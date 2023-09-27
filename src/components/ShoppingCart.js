import React from 'react';

function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
