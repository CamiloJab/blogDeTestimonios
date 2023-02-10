import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio (props){
  return(
    <div className="contenedorTestimonio">
      <img 
        className="imagenTestimonio"
        src={require(`../Imagenes/Testimonio-${props.imagen}.png`)} /*las {} en este caso, indica al codigo que considere todo lo interno codigo JS. - no podemos traer una foto directamente por eso se usa el metodo require()*/
        /*para cargas imagenes de forma dinamica en este caso como tenemos una estructura del nombre de imagenes, generamos comillas inversas y donde estan las diferenciales de nombres ponemos el comando -${props.imagen} este comando se llama PLANTILLAS*/
        alt="foto Susan" />
      <div className="contenerdorTextotestimonio">
        <p className="nombreTestimonio">{props.nombre} en {props.pais}</p>
        <p className="cargoTestimonio">{props.cargo} en {props.empresa}</p>
        <p className="textoTestimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio; //"EXPORTACION POR DEFECTO" comando para que permita exportar la funcion "Testimonio" es importante para que App.js pueda importar la funcion, exporta todo el contenido.
//EXPORTACION NOMBRADA se debe indicar en el APP.JS import {Testimonio}, con esto le indicamos a react que nos exporte solo esa funcion, es util cuando tenemos varias funciones