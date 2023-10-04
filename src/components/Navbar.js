import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearch, onCartClick, onLoginClick }) {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
      onSearch(e.target.value);
    };
  
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <button onClick={onCartClick}>Cart</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={onLoginClick}>Login</button>
      </nav>
    );
  }
  
  export default Navbar;
