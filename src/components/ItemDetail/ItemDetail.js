import React from "react";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="product-info">
      <img src={product.img} alt="" />
      <div className="product-details">
        <h2>{product.name}🏀</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
