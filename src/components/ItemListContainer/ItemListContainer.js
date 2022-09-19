import './itemlistcontainer.css'
import ItemList from '../ItemList/ItemList'
import { Fetch } from "../../utils/Fetch"
import { productos } from "../../assets/products"
import ItemCount from '../ItemCount/ItemCount'
import React,{useEffect, useState} from "react"
import {Spinner} from '@chakra-ui/react'


const ItemListContainer=({greeting})=>{ 
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        Fetch(productos)
        .then(res => {
        setLoading(false)
        setProductList(res)
        })
    },[])

    let stock = 7

    const add =()=>{
        stock != 0 && console.log("Agregaste el producto")
      }
    
    return(
        <main className='products-container'>
        { loading? <Spinner/> :
        <ItemList productList={productList}/>}
        <ItemCount stock={stock} initial={1} onAdd={add}/>
        </main>
    )
}

export default ItemListContainer