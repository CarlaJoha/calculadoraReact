import { useState } from "react";
import logo from "./assets/logo2.png";
import "./App.css";
import Boton from "./components/Boton/Boton"
import Pantalla from "./components/Pantalla/Pantalla";
import BotonClear from "./components/BotonClear/BotonClear";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const addInput = (valor) => {
    setInput(input + valor);
  }
  const result = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Se necesita valores para realizar cálculo")
    }
}

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
          src={logo} 
          alt="logo" 
          className="logo" 
        />
      </div>
      <h1>Calculadora React</h1>
      <div className="contenedor-calculadora" >
        
        <Pantalla input={input}/>
        
        <div className="fila" >
        <Boton handleInput={addInput} >1</Boton>
        <Boton handleInput={addInput} >2</Boton>
        <Boton handleInput={addInput} >3</Boton>
        <Boton handleInput={addInput} >+</Boton>
        </div>
        <div className="fila" >
        <Boton handleInput={addInput} >4</Boton>
        <Boton handleInput={addInput} >5</Boton>
        <Boton handleInput={addInput} >6</Boton>
        <Boton handleInput={addInput} >-</Boton>
        </div>
        <div className="fila" >
        <Boton handleInput={addInput} >7</Boton>
        <Boton handleInput={addInput} >8</Boton>
        <Boton handleInput={addInput} >9</Boton>
        <Boton handleInput={addInput} >*</Boton>
        </div>
        <div className="fila" >
        <Boton handleInput={result} >=</Boton>
        <Boton handleInput={addInput} >0</Boton>
        <Boton handleInput={addInput} >.</Boton>
        <Boton handleInput={addInput} >/</Boton>
        </div>
        <div className="fila" >
          <BotonClear handleClear={ () => setInput("") }>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
