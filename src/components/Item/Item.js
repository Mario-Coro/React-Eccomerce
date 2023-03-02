import * as React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <Link className="link" to={`/Item/${product.id}`}>
      <img className="card-img" src={product.img} alt="" />
      </Link>
      <div className="info">
        <h2>{product.name}</h2>
        <h3>${product.price} ARS</h3>
      </div>
    </div>
  );
};

export default Item;
