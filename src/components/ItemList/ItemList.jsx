
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div>
        <div  style= {{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",

                }}
        >
                    {
                       
                       productos.map( producto => <Item key={producto.id} producto={producto} /> 
                    )}
        </div>

    </div>
  )
}

export default ItemList