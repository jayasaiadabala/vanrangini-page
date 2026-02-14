import React from "react";
import "../styles/Header.css";
import vanranginilogo from "../assets/images/vanranginibrand.png";
export default function Header() {
  return (
    <header className="header">
      <div className="header-top">

        <div className="header-left">
            <img src={vanranginilogo} alt="Vanrangini Logo" className="logo" />
        </div>

        <div className="header-search">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond..."
            className="search-input"
          />
        </div>

        <div className="header-right">
          <i className="bi bi-geo-alt"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-person"></i>

          <div className="cart-wrapper">
            <i className="bi bi-bag"></i>
            <span className="cart-count">0</span>
          </div>
        </div>

      </div>

      {/* Bottom Menu */}
      <div className="header-menu">
        <a href="#">All Jewellery</a>
        <a href="#">Gold</a>
        <a href="#">Diamond</a>
        <a href="#">Earrings</a>
        <a href="#">Rings</a>
        <a href="#">Collections</a>
        <a href="#">Wedding</a>
        <a href="#">Gifting</a>
      </div>
    </header>
  );
}
