import React, { useContext } from "react";
import cart from "../../images/shopping-cart.png";
import { Context } from "../Context/CartContext";
import "../NavBar/navbar.css";

const CartWidget = () => {
  const { cantidad } = useContext(Context);
  return (
    <>
      {cantidad > 0 ? (
        <div className="cart-icon">
          <h3 className="number">{cantidad}</h3>
          <img className="icon" src={cart} alt="cart-icon" />
        </div>
      ) : (
        <img className="icon" src={cart} alt="cart-icon" />
      )}
    </>
  );
};

export default CartWidget;
