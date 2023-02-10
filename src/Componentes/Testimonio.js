import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio (){
  return(
    <div className="contenedorTestimonio">
      <img 
        className="imagenTestimonio"
        src={require("../Imagenes/chica1.png")} //las {} en este caso, indica al codigo que considere todo lo interno codigo JS. - no podemos traer una foto directamente por eso se usa el metodo require()
        alt="foto chica 1" />
      <div className="contenerdorTextotestimonio">
        <p className="nombreTestimonio">Chica 1 en Suecia</p>
        <p className="cargoTestimonio">Ingeniera de Software en Spotity</p>
        <p className="textoTestimonio">Siempre he tenido problemas para aprender JavaScript</p>
      </div>
    </div>
  );
}

export default Testimonio; //"EXPORTACION POR DEFECTO" comando para que permita exportar la funcion "Testimonio" es importante para que App.js pueda importar la funcion, exporta todo el contenido.
//EXPORTACION NOMBRADA se debe indicar en el APP.JS import {Testimonio}, con esto le indicamos a react que nos exporte solo esa funcion, es util cuando tenemos varias funciones