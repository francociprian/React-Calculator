import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setImput] = useState('');
  
  const agregarValor = valor => {
    setImput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setImput(evaluate(input));
    } else {
      alert ('ingrese valor')
    }
  };


  return (
    <div className="App">
      <p className='logo'>
      React-Calculator
      </p>
      <div className='contenedor-calculadora'>
        <Pantalla 
          input={input}
        />
        <div className='fila'>
          <Boton manejarClic={agregarValor}>7</Boton>
          <Boton manejarClic={agregarValor}>8</Boton>
          <Boton manejarClic={agregarValor}>9</Boton>
          <Boton manejarClic={agregarValor}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>4</Boton>
          <Boton manejarClic={agregarValor}>5</Boton>
          <Boton manejarClic={agregarValor}>6</Boton>
          <Boton manejarClic={agregarValor}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>1</Boton>
          <Boton manejarClic={agregarValor}>2</Boton>
          <Boton manejarClic={agregarValor}>3</Boton>
          <Boton manejarClic={agregarValor}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>.</Boton>
          <Boton manejarClic={agregarValor}>0</Boton>
          <Boton className='calcular-resultado' manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarValor}>/</Boton>
        </div>
        <BotonClear 
          manejarClear={() => setImput('')}>
          Clear
        </BotonClear>
      </div>
    </div>
  );
}

export default App;
