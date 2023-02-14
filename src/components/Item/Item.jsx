import { Link  } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div  className='col-4 p-2 mt-5'>
            <div  className='card w-100 text-center shadow'>
                <div className='card-head h-15'>
                    {producto.nombre}
                </div>
                <div className='card-body'>
                    <img src={producto.foto} className='w-100 h-50' />
                    <h6>{producto.descripcion}</h6>
                    <h6>Precio: {producto.precio}</h6>                                                        
                </div>
                <div className='card-footer'>
                    <Link to={`/detail/${producto.id}`}>
                        <button className='btn btn-outline-dark w-100' >Ir a Detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item