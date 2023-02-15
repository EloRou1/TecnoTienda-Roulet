import { useContext } from "react";
import { createContext, useState } from "react";

export const CartContext =createContext([])

export const useCartContext =()=>useContext(CartContext)
 

export const CartContextProvider= ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (product) =>{
       
       
            setCartList( [...cartList, product])
       
        

    }
    const vaciarCarrito= ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value ={{
            cartList,
            agregarCarrito,
            setCartList,
            vaciarCarrito
        }}>
            {children}  
        </CartContext.Provider>


    )
}