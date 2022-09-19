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

  return (
    <div className="counter">
      <Button className="button" onClick={sumar}>
        +
      </Button>
      <h2 className="number">{contador}</h2>
      <Button className="button" onClick={restar}>
        -
      </Button>
      <Button onClick={onAdd}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount
