import React, {useState} from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0)
  const [click, setClick] = useState(false)
  const add = (counter) => {
    setQuantity(counter)
    setClick(true);
  };
  let stock = product.stock

  return (
    <div className="product-info">
      <img src={product.img} alt="" />
      <div className="product-details">
        <h2>{product.name}🏀</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        {click ?  <Link to="/cart"><Button>Finalizar compra</Button></Link> : <ItemCount stock={stock} initial={1} onAdd={add}/> }
        
      </div>
    </div>
  );
};

export default ItemDetail;
