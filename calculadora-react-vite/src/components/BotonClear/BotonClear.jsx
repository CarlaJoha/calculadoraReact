import React from "react";
import "./BotonClear.css";

const BotonClear = (props) => {
    return (
        <button 
            className="boton-clear"  
            onClick={props.handleClear} >{props.children}    
        </button>
    )
};

export default BotonClear;