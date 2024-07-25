import { useState , useEffect } from 'react';


function App() {
  const [texto, setTexto] = useState('');
  const [nuevoTexto, setNuevoTexto] = useState("")
  
  const modificarTexto = () => {
    setNuevoTexto(texto)
    setTexto("")
  }

 
  return (
    <>
    <h1>Ingresar Texto: </h1> <br />
    <input type="text" placeholder='escriba aqui' value={texto} onChange={(e) => setTexto(e.target.value)}/> 
    <button onClick={modificarTexto}>Modificar</button>
    <h1>Texto: </h1> <br />
    <p>{nuevoTexto}</p>
    </>
  );
}

export default App;