import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch,  } from "../../utils/productos"
import ItemList from "../ItemList/ItemList"




const ItemListContainer = ( ) => {
    const [productos, setProductos]= useState([])
    const {categoriaId} = useParams()
    
    
    
    useEffect(()=>{
        if(categoriaId){
            gFetch()
            .then(respuestaPromesa => {
                setProductos(respuestaPromesa.filter(items =>items.categoria === categoriaId))
        })        
        .catch(err => console.log(err))
        }
        else{
        gFetch()
            .then(respuestaPromesa => {
                setProductos(respuestaPromesa)
            })        
            .catch(err => console.log(err))

        }
        
            
    },[categoriaId])
    

   
   
    
    return (
        <div  className='container'> 
          <ItemList productos={productos} />
                
                    
            
        </div>
    )

}


export default ItemListContainer