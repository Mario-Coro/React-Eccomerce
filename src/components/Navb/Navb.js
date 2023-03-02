import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navb = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <Link className='nav-category' key={category.id} to={category.route}>
            {category.name}
          </Link>

        );
      })}
    </>
  );
};

export default Navb;
