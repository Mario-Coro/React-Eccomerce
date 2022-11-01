import React, { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock && setCounter(counter + 1);
  };

  const subtract = () => {
    counter > initial && setCounter(counter - 1);
  };

  const addToCart = () => {
    onAdd(counter);
  };

  return (
    <div className="counter">
      <button onClick={add} className="button">
        +
      </button>
      <h4 className="number">{counter}</h4>
      <button onClick={subtract} className="button">
        -
      </button>
      <button onClick={addToCart} className="add">
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCount;
