import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Example cart items
  const cartItems = [
    { id: 1, name: "MRF English Willow Cricket Bat", price: 6000, image: "/images/item1.jpg" },
    { id: 2, name: "COSCO Tennis Ball x3", price: 210, image: "/images/item2.webp" }
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const cartCount = cartItems.length;

  return (
    <>
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="logo">
          Flipkart
             <span className="plus-text">Plus✦</span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Products, Brands, and More"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="dropdown">
            <a href="#">Categories</a>
            <ul className="dropdown-menu">
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Home & Kitchen</a></li>
              <li><a href="#">Beauty & Health</a></li>
            </ul>
          </li>
          <li className="menu-item"><a href="#">Offers</a></li>
          <li className="menu-item"><a href="#">Orders</a></li>
        </ul>

        <div className="icons">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="user-container" onClick={() => setUserDropdown(!userDropdown)}>
            <FaUser className="icon" />
            {userDropdown && (
              <ul className="dropdown-menu user-menu">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            )}
          </div>

          {/* Updated Cart with Hover Effect & Total Price */}
          <div className="cart-container" onClick={() => setCartDropdown(!cartDropdown)}>
            <FaShoppingCart className="icon cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            {cartDropdown && (
              <div className="cart-dropdown">
                <div className="cart-header">
                  <h4>Shopping Cart</h4>
                  <FaTimes className="close-cart" onClick={() => setCartDropdown(false)} />
                </div>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <span>Rs.{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="cart-total">
                  <strong>Total: Rs.{totalPrice}</strong>
                </div>
                <div className="cart-footer">
                  <button className="view-cart-btn">View Cart</button>
                </div>
              </div>
            )}
          </div>

          <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </nav>

      {/* Floating Cart Icon */}
      <div className="floating-cart" onClick={() => setCartDropdown(!cartDropdown)}>
        <FaShoppingCart className="floating-cart-icon" />
        {cartCount > 0 && <span className="floating-cart-count">{cartCount}</span>}
      </div>
    </>
  );
};

export default Navbar;