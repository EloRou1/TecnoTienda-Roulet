import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/productos"
import ItemDetail from "../ItemDetail/ItemDetail"


 export const ItemDetailContainer = () =>{

    const [producto,setProducto] = useState({})
    const {detailId} = useParams()
 
  
 
 useEffect(()=>{
    gFetch(detailId)
     .then(resp => setProducto(resp))
    

  },[])
 
  
    return(
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}