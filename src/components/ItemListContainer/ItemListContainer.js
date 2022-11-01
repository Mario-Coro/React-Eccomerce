import "./itemlistcontainer.css";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import Spinner from "../../assets/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  let { categoryId } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
    });
  };

  useEffect(() => {
    categoryId === undefined
      ? getData(productsCollection)
      : getData(query(productsCollection, where("category", "==", categoryId)));
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <main className="products-container">
          {" "}
          <ItemList productList={productList} />{" "}
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemListContainer;
