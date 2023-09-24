import React, { useState, useEffect } from 'react';

function ItemListContainer() {
    const [zapatillas, setZapatillas] = useState([]);
  
    useEffect(() => {

      const data = [
        { id: 1, nombre: 'Zapatilla Nike Deportivas', precio: 100, imagen: 'zapatilla2.jpg' },
        { id: 2, nombre: 'Zapatilla Adidas Negras', precio: 120, imagen: 'zapatilla3.jpg' },
      ];
      setZapatillas(data);
    }, []);
  
    return (
      <div className="container">
        <h2>Zapatillas Disponibles</h2>
        <div className="row">
          {zapatillas.map((zapatilla) => (
            <div key={zapatilla.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={zapatilla.imagen} className="card-img-top" alt={zapatilla.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{zapatilla.nombre}</h5>
                  <p className="card-text">Precio: ${zapatilla.precio}</p>
                  <button className="btn btn-primary">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default ItemListContainer;