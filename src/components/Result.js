import React, { Fragment } from 'react';

const Resultado = (props) => {
    return ( 
        <div className="u-full-width resultado">
        <p>La cantidad de ${ props.cantidad }</p>
        <p>Tiene un total a pagar de: ${ props.total }</p>
        <p>en un plazo de { props.plazo } meses</p>
        <p>En mensualidades de: ${ (parseInt(props.total) / parseInt(props.plazo)).toFixed(2) }</p>
        </div>
     );
}
 
export default Resultado;