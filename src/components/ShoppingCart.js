import React from 'react';

function ShoppingCart({ cart, products, removeFromCart }) {
  if (!products) return <p>Error: Products not loaded.</p>;
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((itemName, index) => {
  const item = products.find(product => product.name === itemName);
  if (!item) return null;
  return (
    <div key={index} className="cart-item">
      <img src={item.imgSrc} alt={item.name} width="50" />
      <span>{item.name}</span> {/* Ensure this is the only place where the name is rendered */}
      <button onClick={() => removeFromCart(item.name)}>Remove</button>
    </div>
  );
})
      )}
    </div>
  );
}


export default ShoppingCart;
