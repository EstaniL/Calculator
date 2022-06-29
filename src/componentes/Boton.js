import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };/*isNaN(valor) quiere decir, si el valor no es un numero*/
    return (
       <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
           
           {props.children}
       </div>
       /*onClick={() => props.manejarClic(props.children)}>, cuando se haga click se va a llamar a una funcion*/
    )
}

export default Boton;