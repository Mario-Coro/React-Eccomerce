import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ categories }) => {
  return (
    <nav>
      {categories.map((category) => {
        return (
          <Link className="nav-category" key={category.id} to={category.route}>
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
