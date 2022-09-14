import React, {useState} from "react";
import './itemcount.css';


const ItemCount= ({stock , initial , onAdd})=>{
const [contador , setContador] = useState(initial);
const sumar= ()=>{
     contador < stock && setContador(contador + 1)
}
const restar = ()=>{
    contador > initial && setContador(contador - 1)
}
    return(
        <div className="y">
            <button className="button" onClick={sumar}>+</button>
            <h2 className="number">{contador}</h2>
            <button className="button" onClick={restar}>-</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    ) 
}

export default ItemCount;