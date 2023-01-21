import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer saludo= {"Hola Mundo"} />
    </>
    
  )
}

export default App
