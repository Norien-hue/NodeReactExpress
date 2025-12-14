import { useState, useEffect } from 'react'

function App() {
  const [nombre, setNombre] = useState('');
  const [nombreRespuesta, setNombreRespuesta] = useState('');

  useEffect(() => {
    fetch('/api/saludo')
      .then(res => res.json())
      .then(data => setNombre(data.nombre))
      .catch(err => console.error(err));
  }, []);

  const agregarNombre = async () => {
    try {
      const respuesta = await fetch('/api/saludo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre: 'La pegatina del Vice'})
      });
      const data = await respuesta.json();
      setNombreRespuesta(data.nombre);
    } catch (error) {
      console.error('Error en POST:', error);
    }
  }

  return (
    <>
      <h1>holaaa</h1>
      <h2>{nombre}</h2>
      <h1>Aqui la respuesta</h1>
      <h2>{nombreRespuesta}</h2>
      <button onClick={agregarNombre}>Ejecutar POST</button>
    </>
  )
}

export default App