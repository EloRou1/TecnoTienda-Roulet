import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Carrito/CartContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';


//import './App.css'

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ItemListContainer  />} />
          <Route path='/categoria/:categoriaId' element ={<ItemListContainer />} />        
          <Route path='/detail/:detailId' element ={<ItemDetailContainer />} />
          <Route path='/carrito' element ={<CartContainer />} />
          <Route path='*' element ={<Navigate to="/" />} />
          
          
        </Routes>
      
      </BrowserRouter>
    </CartContextProvider>
    
    
  )
}

export default App
