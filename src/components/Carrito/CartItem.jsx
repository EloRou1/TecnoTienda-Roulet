import React from 'react'
import { useCartContext } from "../../context/CartContext"

const CartItem = ({prod}) => {
    
    const{ cartList,setCartList } = useCartContext()
    
    const quitarDelCarrito=() =>{

       setCartList(cartList.filter(item=> item.nombre !==prod.nombre))
    }
  return (
    <div className='container'>
        <div  className='col-4 p-2 mt-5'>
                                        <div  className='card w-100 text-center shadow'>
                                            <div className='card-head h-15'>
                                                {prod.nombre}
                                            </div>
                                            <div className='card-body'>
                                                <img src={prod.foto} className='w-100 h-50' />
                                                <h6>{prod.descripcion}</h6>
                                                <h6>Precio: {prod.precio}</h6>                                                        
                                            </div>
                                            <div className='card-footer'>
                                                <h4>Cantidad:{prod.cantidad}</h4>
                                                <button className="btn btn-outline-danger" onClick={quitarDelCarrito}>Quitar del Carrito</button>
                                            </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default CartItem