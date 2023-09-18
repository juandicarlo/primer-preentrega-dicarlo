import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos/productos';
import Contacto from './components/Contactos/contactos';
import QuienesSomos from './components/QuienesSomos/quienessomos';
import FormularioLogin from "./components/Formularios/Inputusuario/InputUsuario"
import FormularioRegistro from "./components/Formularios/formularioRegistro"

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
     
      <Router>
      <Navbar cartCount={cartCount} />
          <button className='btn btn-primary text-right' onClick={() => setCartCount(cartCount + 1)}>Agregar al carrito</button>
          <Navbar/>
   
        <Routes>
        
          <Route path="/productos" component={Productos} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/quienes-somos" component={QuienesSomos} />
        </Routes>
    </Router>
    </div>
  );
}




  


export default App;