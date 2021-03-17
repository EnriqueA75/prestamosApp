import React, {Fragment} from 'react';

// function Header(props){
//     console.log(props)
//     return (
//         <Fragment>

//         <h1>{props.titulo}</h1>
//         <h2>{props.descripcion}</h2>

//         </Fragment>
//     )
// }

const Header = (props) => {
 
    return (
        <Fragment>

        <h1>{props.titulo}</h1>
        <h2>{props.descripcion}</h2>

        </Fragment>
    )
}

export default Header