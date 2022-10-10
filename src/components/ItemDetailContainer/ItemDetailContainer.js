import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import "./itemdetailcontainer.css";
import { db } from '../../firebase/firebase';
import { doc , getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productCollection = collection( db, 'products')
    const ref = doc(productCollection , productId)
    getDoc(ref)
    .then((product)=>{
      setProduct(
        {
          id: product.id,
          ...product.data()
        }
      )
      setLoading(false)
    })

  }, [productId]);

  return (
    <div className="item-detail-container">
      {loading? <Spinner/> :<ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
