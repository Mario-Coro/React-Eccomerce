import React from "react";
import logo from "../../images/logo.jpg";
import "./navbar.css";
import CartWidget from "../Cart/CartWidget";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  const categories = [
    {
      id: 20,
      name: "Shoes",
      route: "/categories/shoes",
    },
    {
      id: 21,
      name: "Jerseys",
      route: "/categories/jerseys",
    },
    {
      id: 22,
      name: "Accsesories",
      route: "/categories/accsesories",
    },
  ];

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1 className="title">HoopStore</h1>
      <Nav categories={categories} />
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
export default NavBar;
