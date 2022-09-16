import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { Fetch } from "../../utils/Fetch";
import { productos } from "../../assets/products";
import React,{useEffect, useState} from "react";
import {Spinner} from '@chakra-ui/react'


const ItemListContainer=({greeting})=>{ 
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        Fetch(productos)
        .then(res => {
        setLoading(false)
        setProductList(res)
        })
    },[])
    
    return(<>{
        loading? <Spinner/> :
   <ItemList productList={productList}/>
    }
   </>
    )
}

export default ItemListContainer