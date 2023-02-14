import React from 'react'
import { Link  } from "react-router-dom"

const InputCount = () => {

  return (
    <>
      <Link to= "/carrito">
        <button>
          Finalizar compra
        </button>
      </Link>
      <Link to="/">
        <button>
          Continuar compra
        </button>
      </Link>

    </>
  )
}

export default InputCount