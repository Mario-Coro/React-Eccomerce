import React from "react";
import logo from "../../images/logo.jpg";
import "./navbar.css";
import CartWidget from "../Cart/CartWidget";

const NavBar = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">Hoopstore</h1>
      <nav>
        <ul>
          <li>
            <a href="">Shoes</a>
          </li>
          <li>
            <a href="">Jerseys</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
export default NavBar;
