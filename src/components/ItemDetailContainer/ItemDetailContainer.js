import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Fetch } from "../../utils/Fetch";
import Products from "../../assets/products";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Fetch(Products, parseInt(productId)).then(
      (res) => setProduct(res),
      setLoading(false)
    );
  }, [productId]);

  return (
    <div className="item-detail-container">
      {loading? <Spinner/> :<ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
