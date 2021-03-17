import React, {useState} from 'react';
import { calcularTotal } from '../helpers'

const Form = (props) => {
    
    const [error, guardarError] = useState(false)


    //calcular prestamo cuando el usuario hace submit
    const calcularPrestamo = e => {
        console.log('submit')
        e.preventDefault()
        //validar 
        if(props.plazo === '' || props.cantidad === 0){
            guardarError(true)
        }
        guardarError(false)

            props.guardarCargando(true)

        setTimeout(() => {

            const total = calcularTotal(props.cantidad,props.plazo)
            //una vez calculado guaramos el total
            props.guardarTotal(total)
            //deshanilitar el spinner
            props.guardarCargando(false)
        },3000)

    }


    return ( 
        
        <form  onSubmit={ calcularPrestamo } >
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ e => props.guardarCantidad(parseInt( e.target.value )) }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ e => props.guardarPlazo(parseInt( e.target.value )) }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3"> 3 meses</option>
                      <option value="6"> 6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                      <option value="24">36 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width"                     
                  />
              </div>
          </div>
  </form>

     );
}
 
export default Form;