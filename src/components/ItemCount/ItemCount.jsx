import React, { useState } from 'react'


const ItemCount = ({initial=1, stock=10, onAdd, manejoInput}) => {
    const [count , setCount] =useState(initial)
    const manejoSumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
        
    }
    const manejoRestar = ()=>{    
        if(count > initial){
            setCount(count - 1)
        }
        
    }
    const manejoOnAdd = ()=>{
        onAdd(count)
    }
    const manejoOnAddIntercambiar =()=>{
        manejoOnAdd()
        manejoInput()
    }
   
   return (
  
         <div className='card'>
            <div className='card-body row w-200'>

                <div className='col'>
                    <button className='btn btn-outline-dark w-100' onClick={manejoSumar}>+</button>
                </div>
                <div className='col text-center mt-1 mb-1'>
                    <label >{count}</label>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-dark w-100' onClick={manejoRestar}>-</button>   
                </div>
                
                </div>
                <div className='card-footer'>
                    <button className='btn btn-outline-dark w-100'onClick={manejoOnAddIntercambiar}>Agregar al carrito</button>

                </div>
            </div>
        
            
        
    
   )
}

export default ItemCount