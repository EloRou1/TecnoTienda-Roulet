import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Carrito/CartContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element ={<ItemListContainer saludo= {"Hola Mundo"} />} />
        <Route path='/categoria/:categoriaId' element ={<ItemListContainer saludo= {"Hola Mundo"} />} />        
        <Route path='/detail/:detailId' element ={<ItemDetailContainer />} />
        <Route path='/carrito' element ={<CartContainer />} />
        <Route path='*' element ={<Navigate to="/" />} />
        
        
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
