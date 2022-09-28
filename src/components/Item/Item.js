import React from "react";
import "./item.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt="" />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <Link to={`/Item/${product.id}`}>
        <Button>Ver Detalles</Button>
      </Link>
    </div>
  );
};

export default Item;
