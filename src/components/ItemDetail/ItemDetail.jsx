import React, { useContext } from 'react'

import Intercambiar from '../intercambiar/Intercambiar'




const ItemDetail = ({producto}) => {
  
  

  
  
  
  return (  
    <div className="container row">
            <div className="row ">
                <div className="col-6 ">
                    <h2>{producto.nombre}</h2>
                    <img src= {producto.foto} alt={producto.nombre} className="w-100"/>
                    <h4>{producto.descripcion}</h4>
                    <h5>{producto.categoria}</h5>
                    <h4>{producto.precio}</h4>
                    
                    
                    <div className='col-6'>
                      <Intercambiar producto={producto}  />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemDetail