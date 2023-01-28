import { useParams } from "react-router-dom"

 export const ItemDetailContainer = () =>{
 const {detailId} = useParams()
 console.log(detailId)
    return(
        <>

        </>
    )
}