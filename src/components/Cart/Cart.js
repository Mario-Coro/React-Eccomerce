import React, { useContext, useState } from "react";
import { Context } from "../Context/CartContext";

const Cart = () => {
  const { cart } = useContext(Context);
  return (
    <>
      {cart.map((prod) => {
        return <h2 key={prod.id+1}>{prod.name}</h2>;
      })}
    </>
  );
};

export default Cart;
