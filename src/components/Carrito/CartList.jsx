import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React from 'react'

const CartList = () => {

    const{ cartList, vaciarCarrito } = useCartContext()
  return (
    <div>
        {cartList.map (prod => <div key={prod.id} className='col-4 p-2 mt-5'>
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
                                                
                                            </div>
                                        </div>
                                    </div>)
            }
                            
            
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
    </div>
  )
}

export default CartList