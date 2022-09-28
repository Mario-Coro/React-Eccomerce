import "./itemlistcontainer.css";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";
import { Fetchx } from "../../utils/Fetchx";
import Products from "../../assets/products";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  let { categoryId } = useParams();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Fetchx(Products, categoryId).then(
      (res) => setProductList(res),
      setLoading(false)
    );
  }, [categoryId]);

  let stock = 7;

  const add = () => {
    stock !== 0 && console.log("Agregaste el producto");
  };

  return (
    <main className="products-container">
      {loading ? <Spinner /> : <ItemList productList={productList} />}
    </main>
  );
};

export default ItemListContainer;
