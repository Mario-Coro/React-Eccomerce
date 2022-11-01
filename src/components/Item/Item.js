import * as React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img className="card-img" src={product.img} alt="" />
      <div className="info">
        <h2>{product.name}</h2>
        <h3>${product.price} ARS</h3>
      </div>
      <Link className="link" to={`/Item/${product.id}`}>
        <button className="card-button">See Details</button>
      </Link>
    </div>
  );
};

export default Item;
