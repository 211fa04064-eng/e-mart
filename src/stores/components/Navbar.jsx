import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar-section">

      <div className="navSection">
      <Link to='/' className="custom-link">
  <div className="title">
    <h2>E-Mart</h2>
  </div>
</Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignUp</div>
        </div>
          <Link to= '/cart'>
          <div className="cart">Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      <div className={`subMenu ${menuOpen ? 'mobile-active' : ''}`}>
        <ul>
          <Link to="/mobiles" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Fridge</li>
          </Link>
          <Link to="/" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Books</li>
          </Link>

          <Link to="/" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>Speakers</li>
          </Link>

          <Link to="/" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>TV's</li>
          </Link>

          <Link to="/ac" className="custom-link" onClick={() => setMenuOpen(false)}>
            <li>AC</li>
          </Link>
        </ul>
      </div>
      {/* mobile menu toggle */}
      <button className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">{menuOpen ? '✕' : '☰'}</button>
    </div >
  );
};

export default Navbar;
