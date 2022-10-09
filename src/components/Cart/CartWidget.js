import React, {useContext} from "react"
import cart from '../../images/shopping-cart.png'
import { Context } from "../Context/CartContext";
import '../NavBar/navbar.css'

const CartWidget =()=>{
    const {cantidad} = useContext(Context)
return(
    <>
     { cantidad > 0 && <p className="number">{cantidad}</p>}
    <img className="cart-icon" src={cart} alt="cart-icon" />
    </>
)
}

export default CartWidget 