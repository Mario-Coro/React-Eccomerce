import React, { useState, useEffect } from "react";
import logo from "../../images/logo.jpg";
import "./navbar.css";
import CartWidget from "../Cart/CartWidget";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const productsCategories = collection(db, "categories");
  useEffect(() => {
    getDocs(productsCategories).then((data) => {
      const categoriesList = data.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategories(categoriesList);
    });
  }, []);

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
