import React from "react";
import './item.css';
import {Button} from '@chakra-ui/react'

const Item =({product})=>{
    return(
        <div className="card">
        <img src={product.img} alt="" />
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <Button>Ver Detalles</Button>
        </div>
    );
}

export default Item;