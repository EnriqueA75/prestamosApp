import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
function App() {

  const [cantidad, guardarCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState('')
  const [total, guardarTotal] = useState(0)
  
  return (
    <Fragment>

      <Header
        titulo="Cotizador de prestamos"
        descripcion="utiliza el cotizador"
      />
      <div className="container"> <Form
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
      /> <p>Total a Pagar ${ total }</p> </div>
      

    </Fragment>
  );
}

export default App;
