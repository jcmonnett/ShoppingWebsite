import React, { useState } from 'react';

function Product({ name, price, imgSrc, addToCart }) {
  const [buttonText, setButtonText] = useState('Add to Cart');

  const handleAddToCart = () => {
    addToCart(name);
    setButtonText('Added!');
    setTimeout(() => {
      setButtonText('Add to Cart');
    }, 1000); // Reset the button text after 1 second
  };
  

  return (
    <div className="products-container">
      <img src={imgSrc} alt={name} width="100" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={handleAddToCart}>{buttonText}</button>
    </div>
  );
}

export default Product;
