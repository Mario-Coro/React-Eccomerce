import React, { useState, useEffect } from "react";
import logo from "../../images/logo.jpg";
import "./navbar.css";
import CartWidget from "../Cart/CartWidget";
import Navb from "../Navb/Navb";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const productsCategories = collection(db, "categories");
  useEffect(() => {
    getDocs(productsCategories).then((data) => {
      const categoriesList = data.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategories(categoriesList);
    });
  }, []);

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="header">
          <Container fluid>
            <div className="brand">
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <h1 className="title">HoopStore</h1>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}placement="end">
              <Offcanvas.Header className="sidebar-top" closeButton>
                <Offcanvas.Title className="sidebar-title" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HoopStore🏀
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="sidebar justify-content-center align-items-center flex-grow-1">
                  <Navb categories={categories} />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default NavBar;
