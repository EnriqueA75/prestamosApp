import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Message from './components/Message'
import Result from './components/Result'
import Spinner from './components/Spinner'
function App() {

  const [cantidad, guardarCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState('')
  const [total, guardarTotal] = useState(0)
  const [cargando, guardarCargando] = useState(false)
  
  let componente

  if(cargando === true){
    componente = <Spinner/>
  }else if(total === 0){
    componente = <Message/>
  }else{
    componente = <Result
    plazo={plazo}
    total={total}
    cantidad={cantidad}
    />
  }

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
        guardarCargando={guardarCargando}
      /> {componente} </div>
      

    </Fragment>
  );
}

export default App;
