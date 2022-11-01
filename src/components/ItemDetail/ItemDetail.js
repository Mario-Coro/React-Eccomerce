import React, { useState, useContext } from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
  const [click, setClick] = useState(false);
  const { addOnCart } = useContext(Context);

  const onAdd = (contador) => {
    setClick(true);
    addOnCart(product, contador);
  };

  let stock = product.stock;

  return (
    <div className="product-detail">
      <div className="product-img">
        <img src={product.imgDetail} alt="" />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price} ARS</h3>
        {click ? (
          <Link to="/cart">
            <button className="purchase">Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
