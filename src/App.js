import './App.css';
import Testimonio from "./Componentes/Testimonio.js";

{/*se llama al JS donde tenemos el codigo, se llama dentro de una etiqueta y se cierra en la misma linea*/}
function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Esto es lo que dicen nuestro alumnos </h1>
        <Testimonio /> 
      </div>
    </div>
  );
}

export default App;
