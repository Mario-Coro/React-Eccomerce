import React, { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const addOnCart =(product, quantity)=>{
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              quantity: item.quantity + quantity
            };
          }
          return item;
        })
      );
    } 
    else{
      setCart([...cart, {product, quantity}])
    }
    setCantidad( cantidad + quantity)
    setTotal(total +(quantity * product.price))
  }
  

  const deleteItem = (id) => {
    const productCart = cart.find((item)=>item.product.id === id);
     setCart(cart.filter((item) => {
        return item.product.id !== id;
      }))
      setCantidad( cantidad - productCart.quantity)
      setTotal(total - ( productCart.quantity * productCart.product.price))
  };

  const reset =()=>{
    setCart([])
    setCantidad(0)
    setTotal(0)
  }
  
  const isInCart = (id) => cart.some((prod) => prod.product.id === id)

  
  
  

  return <Context.Provider value={{ cart, addOnCart, deleteItem, reset, total, cantidad}}>{children}</Context.Provider>;
};

export default CustomProvider;
