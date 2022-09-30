import React, { useState } from "react"
import {Button} from '@chakra-ui/react'
import "./itemcount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial)

  const sumar = () => {
    contador < stock && setContador(contador + 1)
  }

  const restar = () => {
    contador > initial && setContador(contador - 1)
  }

  const ff =()=>{
    const counter = contador
    onAdd(counter)
  }

  return (
    <div className="counter">
      <Button className="button" size= 'xs' onClick={sumar}>
        +
      </Button>
      <h4 className="number">{contador}</h4>
      <Button className="button" size= 'xs' onClick={restar}>
        -
      </Button>
      <Button size='sm' onClick={ff}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount
