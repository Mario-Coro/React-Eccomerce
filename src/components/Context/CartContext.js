import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();
const CustomProvider = ({ children }) => {
  let getCartFromLocal = JSON.parse(localStorage.getItem("cart"));
  if (getCartFromLocal === null) {
    getCartFromLocal = [];
  }
  let getQuantityFromLocal = JSON.parse(localStorage.getItem("quantity"));
  if (getQuantityFromLocal === null) {
    getQuantityFromLocal = 0;
  }

  let getTotalFromLocal = JSON.parse(localStorage.getItem("total"));
  if (getTotalFromLocal === null) {
    getQuantityFromLocal = 0;
  }
  const [cart, setCart] = useState(getCartFromLocal);
  const [cantidad, setCantidad] = useState(getQuantityFromLocal);
  const [total, setTotal] = useState(getTotalFromLocal);

  const addOnCart = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
    setCantidad(cantidad + quantity);
    setTotal(total + quantity * product.price);
  };

  const deleteItem = (id) => {
    const productCart = cart.find((item) => item.product.id === id);
    setCart(
      cart.filter((item) => {
        return item.product.id !== id;
      })
    );
    setCantidad(cantidad - productCart.quantity);
    setTotal(total - productCart.quantity * productCart.product.price);
  };

  const reset = () => {
    setCart([]);
    setCantidad(0);
    setTotal(0);
  };

  const isInCart = (id) => cart.some((prod) => prod.product.id === id);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantity", JSON.stringify(cantidad));
    localStorage.setItem("total", JSON.stringify(total));
  }, [cart, cantidad, total]);

  return (
    <Context.Provider
      value={{ cart, addOnCart, deleteItem, reset, total, cantidad }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomProvider;
