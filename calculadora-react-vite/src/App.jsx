import { useState } from "react";
import logo from "./assets/logo5.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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

      </div>
    </div>
  );
}

export default App;
