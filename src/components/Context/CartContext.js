import React, { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addOnCart =(product, quantity)=>{
    if (isInCart(product.id)){
      console.log('true');
    }
    else{
      setCart([...cart, {product, cantidad:quantity}])
      console.log(isInCart(product.id));
    }
    
  }
  

  const deleteItem =(id)=>{
    const filter = cart.filter((item)=>{
        return item.id !== id
    })
    setCart(filter)
  }

  const isInCart = (id)=> cart.some((product) => product.id === id)
  

  const reset =()=>{
    setCart([])
  }

  return <Context.Provider value={{ cart, addOnCart, isInCart }}>{children}</Context.Provider>;
};

export default CustomProvider;
