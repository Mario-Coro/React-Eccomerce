import React, { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const category = "shoes"


  const addOnCart =(product, quantity)=>{
   if(isInCart(product.id)){
    console.log('true');
   }
    else{
      setCart([...cart, {product, cantidad: quantity}])
      console.log(isInCart(product.id));
      console.log(product.id);
    }
  }
  

  const deleteItem =(id)=>{
    const filter = cart.filter((item)=>{
        return item.id !== id
    })
    setCart(filter)
  }

  const reset =()=>{
    setCart([])
  }
  
  const isInCart = (id) => cart.some((prod) => prod.id === id)
  

  return <Context.Provider value={{ cart, addOnCart}}>{children}</Context.Provider>;
};

export default CustomProvider;
