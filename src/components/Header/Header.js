import React from "react";
import logo from '../../images/logo.jpg';
import cart from '../../images/shopping-cart.png'
import './header.css'

const Header = ()=>{
return(
 <header>
    <img class="logo" src={logo} alt="logo" />
    <h1>Hoopstore</h1>
    <nav>
        <ul>
            <li>
            <a href="">Shoes</a>
            </li>
            <li>
            <a href="">Jerseys</a>
            </li>
            <li>
            <a href="">Accessories</a>
            </li>
        </ul>
    </nav>
    <img class="cart-icon" src={cart} alt="cart" />
 </header>
)
}
 export default Header