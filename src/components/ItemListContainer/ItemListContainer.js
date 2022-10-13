import "./itemlistcontainer.css";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  let { categoryId } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsCollection = collection(db, "products");

  const getData = (prodList) => {
    getDocs(prodList).then((data) => {
      const list = data.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProductList(list);
      setLoading(false);
    });
  };

  useEffect(() => {
    categoryId === undefined
      ? getData(productsCollection)
      : getData(query(productsCollection, where("category", "==", categoryId)));
  }, [categoryId]);

  return (
    <main className="products-container">
      {loading ? <Spinner /> : <ItemList productList={productList} />}
    </main>
  );
};

export default ItemListContainer;
