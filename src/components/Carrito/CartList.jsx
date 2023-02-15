import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React from 'react'
import CartItem from "./CartItem"

const CartList = () => {

    const{ cartList, vaciarCarrito } = useCartContext()
  return (
    <div>
        {cartList.map (prod =><CartItem key={prod.id} prod={prod}/> )
            }
                            
            
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
    </div>
  )
}

export default CartList