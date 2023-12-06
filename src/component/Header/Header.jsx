// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h1>Sohoje Mile</h1>
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/manage inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
