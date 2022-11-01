import React, { useContext, useState } from "react";
import { Context } from "../Context/CartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const { cart, deleteItem, reset, total } = useContext(Context);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [saleId, setSaleId] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const client = {
    nombre: name,
    Telefono: phone,
    email: email,
  };

  const checkOut = () => {
    const salesCollection = collection(db, "sales");
    addDoc(salesCollection, {
      client,
      items: cart,
      date: serverTimestamp(),
      total,
    }).then((sale) => setSaleId(sale.id));
    reset();
  };

  return (
    <>
      {cart.length === 0 ? (
        <h2>
          The cart is empty go to <Link to="/">Home</Link>
          {
            saleId !== '' && <h2>
              This is your purchase id: {saleId}
            </h2>
          }
        </h2>
      ) : (
        <>
          <h2 className="cart-title">My Cart</h2>
          <Table className="table" striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Units</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <div className="product">
                      <img className="img" src={item.product.img} alt='' />
                      <h3>{item.product.name}</h3>
                    </div>
                  </td>
                  <td className="units">{item.quantity}</td>
                  <td>${item.product.price} ARS</td>
                  <td>
                    <img
                      onClick={() => {
                        deleteItem(item.product.id);
                      }}
                      className="button-img"
                      src="https://cdn-icons-png.flaticon.com/512/484/484560.png"
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="container">
            <div className="cardt">
              <h1 className="cardt_title">Buyer Information</h1>
              <form className="card_form">
                <div className="input">
                  <input
                    onChange={(e) => updateName(e)}
                    type="text"
                    className="input_field"
                    required
                  />
                  <label className="input_label">Full name</label>
                </div>
                <div className="input">
                  <input
                    onChange={(e) => updateEmail(e)}
                    type="text"
                    className="input_field"
                    required
                  />
                  <label className="input_label">Email</label>
                </div>
                <div className="input">
                  <input
                    onChange={(e) => updatePhone(e)}
                    type="number"
                    className="input_field"
                    required
                  />
                  <label className="input_label">Phone</label>
                </div>
              </form>
            </div>
          </div>
          <button className="cart-buttons" onClick={reset}>
            Empty Cart
          </button>
          <button className="cart-buttons" onClick={checkOut}>
            Checkout
          </button>
          <h3 className="total">Total: ${total}ARS</h3>
        </>
      )}
    </>
  );
};

export default Cart;
