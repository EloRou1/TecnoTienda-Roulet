
import InputCount from '../InputCount.jsx/InputCount'
import ItemCount from '../ItemCount/ItemCount'
import {  useCartContext } from '../../context/CartContext'
import { useState } from 'react'

const Intercambiar = ({producto}) => {
  const {agregarCarrito} = useCartContext()
  
  const onAdd =(cant)=>{
    
    agregarCarrito( {...producto, cantidad:cant} )
   
  }
    
  const [inputType, setInputType]=useState("button")
    
  const manejoInput=()=>{
        setInputType("input")
        
  }
    
  return (
    <div>
         {
            inputType === "button" ? 
                <ItemCount  onAdd={onAdd} manejoInput={manejoInput}/> 
                :
                <InputCount/>
         }
        
    </div>
  )
}

export default Intercambiar