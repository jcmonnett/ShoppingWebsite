import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Modal from './components/Modal';



function App() {
  const allProducts = [
    { name: "Example Item 1", price: "$10", imgSrc: '/src/images/item1.jpg' },
    { name: "Example Item 2", price: "$20", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 3", price: "$30", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 4", price: "$10", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 5", price: "$20", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 6", price: "$30", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 7", price: "$10", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 8", price: "$20", imgSrc: "/src/images/item1.jpg" },
    { name: "Example Item 9", price: "$30", imgSrc: "/src/images/item1.jpg" },
    
  ];

  

  const [cart, setCart] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleSearch = (query) => {
    if (query) {
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setDisplayedProducts(filteredProducts);
    } else {
      setDisplayedProducts(allProducts);
    }
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} onCartClick={toggleCartModal} />
        <header className="App-header">
          <h1>Shopping Website</h1>
          <div className="products">
            {displayedProducts.map(product => (
              <Product
                key={product.name}
                name={product.name}
                price={product.price}
                imgSrc={product.imgSrc}
                addToCart={() => addToCart(product.name)}
              />
            ))}
          </div>
          {isCartModalOpen && (
            <Modal onClose={toggleCartModal}>
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            </Modal>
          )}
        </header>
        {isCartModalOpen && (
    <Modal onClose={toggleCartModal}>
      <ShoppingCart cart={cart} products={allProducts} removeFromCart={removeFromCart} />
    </Modal>
  )}
      </div>
    </Router>
  );
}

export default App;