import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartList from "./CartList"

export const CartContainer = () => {
    const{ cartList } = useCartContext()
    return(
        
        <div>
            { cartList.length === 0 ? <div className="center"> 
                <h2 >El Carrito esta Vacio</h2>
                <Link to="/">
                    <button className='btn btn-outline-dark w-60'>
                        Volver al home
                    </button>
                </Link>
            </div>:

            <CartList/>
            }
           
              

        </div>
    )
}
