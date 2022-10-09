import React, { useState, useContext, useEffect } from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
  const [click, setClick] = useState(false);
  const { cart, addOnCart} = useContext(Context);
  
  const onAdd = (contador) => {
    setClick(true);
    addOnCart(product, contador)
  };

  let stock = product.stock;

  return (
    <div className="product-info">
      <img src={product.img} alt="" />
      <div className="product-details">
        <h2>{product.name}🏀</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        {click ? (
          <Link to="/cart">
            <Button>Finalizar compra</Button>
          </Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
