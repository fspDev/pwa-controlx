import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Importa HashRouter en lugar de BrowserRouter
import './Trivia.css';
import logo from './images/logo.png';

function Trivia() {
  // Array de preguntas con sus opciones y respuesta correcta
  const preguntas = [
    {
      pregunta: '¿Cuál es la marca de aceites de motor utilizada por Ferrari?',
      opciones: ['Shell', 'YPF', 'Castrol'],
      respuestaCorrecta: 'Shell'
    },
    {
      pregunta: '¿Cuántos Litros de combustible transporta Anjor por año?',
      opciones: ['1 Millón', '10 Millones', '120 Millones'],
      respuestaCorrecta: '120 Millones'
    },
    {
      pregunta: '¿Por qué V POWER es el mejor combustible?',
      opciones: ['Mayor Potencia', 'Mayor Rendimiento', 'Todas Correctas'],
      respuestaCorrecta: 'Todas Correctas'
    }
  ];

  // Estados para controlar la pregunta actual, respuestas seleccionadas y mensaje de resultado
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mensaje, setMensaje] = useState('');

  // Función para manejar la selección de una respuesta
  const handleSeleccionarRespuesta = (respuesta) => {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
      if (preguntaActual === preguntas.length - 1) {
        setMensaje('¡FELICIDADES, GANASTE!');
      } else {
        setPreguntaActual(preguntaActual + 1);
        setMensaje('');
      }
    } else {
      setMensaje('QUIZÁS LA PRÓXIMA');
    }
  };

  // Función para manejar el evento de regresar
  const handleRegresar = () => {
    window.location.href = './index.html'; // Usa una ruta relativa para regresar
  };

  return (
    <div className="TriviaContainer">
      <img src={logo} className="App-logo" alt="logo" />
      {/* Renderiza el mensaje de resultado o la pregunta actual */}
      {mensaje ? (
        <p className='Mensaje'>{mensaje}</p>
      ) : (
        <div className="Tarjeta">
          <p className='Titulos'>Respondé 3 preguntas y ganá!</p>
          {/* Muestra la pregunta actual y las opciones */}
          <p className='Pregunta'>{preguntas[preguntaActual].pregunta}</p>
          <div className="Opciones">
            {preguntas[preguntaActual].opciones.map((opcion, index) => (
              <button key={index} className="Opcion" onClick={() => handleSeleccionarRespuesta(opcion)}>
                {opcion}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Botón para regresar */}
      <button className="BotonRegresar" onClick={handleRegresar}>Regresar</button>
    </div>
  );
}

function App() {
  return (
    <Router> {/* Utiliza el componente HashRouter para envolver tu aplicación */}
      <Trivia />
    </Router>
  );
}

export default App;
