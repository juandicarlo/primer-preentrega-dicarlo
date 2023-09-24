import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, memo } from 'react';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="item-list-container">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;