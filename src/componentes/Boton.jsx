import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  const equalsSign = valor => {
    return valor === '='
  };

  return (
    <div 
      className={`boton-contenedor  ${esOperador(props.children) ? 'operador' : null}  
                                    ${equalsSign(props.children) ? 'signoIgual' : null}`}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;