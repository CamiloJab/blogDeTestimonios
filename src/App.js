import './App.css';
import Testimonio from "./Componentes/Testimonio.js";

/*se llama al JS donde tenemos el codigo, se llama dentro de una etiqueta y se cierra en la misma linea*/
function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Esto es lo que dicen nuestras historias </h1>
        <Testimonio
          nombre="Mireia Belmonte"
          pais="España"
          imagen="MireiaBelmonte"
          cargo="Nadadora Olimpica"
          empresa="Independiente"
          testimonio="Mireia tiene todas las cualidades para perfilarse como nuestro ejemplo por excelencia de esfuerzo, disciplina y constancia. Este es el motivo por el cual, desde Page Consulting y el resto de nuestras marcas (Michael Page, Page Personnel, Page Executive ) seguimos apostando por ella y apoyándole desde sus inicios. <br/>Tus probabilidades de éxito aumentan cada vez que lo intentas” es su lema de vida desde que tenía 5 años cuando comenzó a nadar por recomendación de su médico. Desde su debut en los Juegos Olímpicos de Pekín en 2008, no ha hecho más que batir récords, y diez años más tarde, ha ganado más de cuarenta medallas, ocho récords de España y cuatro récords del mundo. Su indiscutible talento le ha convertido en la mejor deportista española, y por ella, estamos deseando que lleguen los Juegos Olímpicos de Tokio 2020."/>
        <Testimonio
          nombre="Rafael Nadal"
          pais="España"
          imagen="RafaelNadal"
          cargo="Tenista"
          empresa="Independiente"
          testimonio="Tal es su influencia y alcance, que las escuelas de negocios imparten su caso desde 2009, porque su éxito deportivo también se ha convertido en su mayor éxito personal. Su premisa fundamental es “ser una persona positiva y pensar siempre que los cosas van a mejorar”. Sus claves se resumen en esta frase y lleva toda una vida poniéndola en práctica. Su fortaleza mental es su guía, y trabajar bajo presión es su día a día. Además, mantiene una serenidad imperturbable gracias a su disciplina y esfuerzo continuo.  Año tras año, se reafirma como el máximo ejemplo de constancia y trabajo, lo que le ha llevado a liderar el ranking como el mejor tenista del mundo."/>
        <Testimonio 
          nombre="Susan Wojcicki"
          pais="Estados Unidos"npm 
          imagen="SusanWojcicki"
          cargo="Ingeniera de Software"
          empresa="YouTube"
          testimonio="Susan Wojcicki es CEO de YouTube. Pero también una de las primeras empleadas de Google. De hecho, el garaje de su casa fue la primera sede del buscador. Hace pocos días publica un post en el blog oficial de la empresa en el que anunciaba la puesta en marcha del proyecto Made with code, con el que se busca fomentar que las niñas estudien programación. Un campo profesional tradicionalmente dominado por los hombres. 
          
          De hecho, sólo el 0,4 por ciento de las mujeres que entran en la universidad en Estados Unidos se plantea realizar estudios que las capaciten para desarrollar software. A pesar de que el sueldo medio de un licenciado en ese sector durante su primero año de trabajo supera en 15.000 dólares al de los licenciados en otras especialidades. Además, será uno de los empleos que más demanda tendrá en la próxima década."/>
      </div>
    </div>
  );
}

export default App;
