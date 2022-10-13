import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";
import Item from "../Item/Item";
import "./cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { cart, deleteItem, reset, total } = useContext(Context);

  const client = {
    nombre: "Mario Coronado",
    Telefono: 1144556677,
    email: "chinocoronado181@gmail.com",
  };

  const checkOut = () => {
    const salesCollection = collection(db, "sales");
    addDoc(salesCollection, {
      client,
      items: cart,
      date: serverTimestamp(),
      total,
    }).then((sale) => console.log(sale.id));
  };

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          no hay productos. Ve al <Link to="/">Home</Link> y añade productos
        </h1>
      ) : (
        <>
          {" "}
          {cart.map((item) => (
            <div className="item" key={item.product.id}>
              <img src={item.product.img} alt="" />
              <h3>{item.product.name}</h3>
              <h4>Cantidad: {item.quantity}</h4>
              <button
                onClick={() => {
                  deleteItem(item.product.id);
                }}
              >
                Eliminar del Carrito
              </button>
            </div>
          ))}
          <button onClick={reset}>Vaciar Carrito</button>
          <button onClick={checkOut}>Checkout</button>
        </>
      )}
    </>
  );
};

export default Cart;
