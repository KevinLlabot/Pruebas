import { useState } from 'react'

function App() {
const [izquierdo, setIzquierdo] = useState(true);
const [centro, setCentro] = useState(false);
const [derecho, setDerecho] = useState(false);

const clickIzquierdo = () =>{
  setIzquierdo(false)
  setCentro(true)
}

const clickCentro = () => {
  setCentro(false)
  setDerecho(true)
}

const clickDerecho = () => {
  setDerecho(false)
  setIzquierdo(true)
}

  return (
    <>
     <button onClick={clickIzquierdo} disabled={!izquierdo}>Izquierdo</button>
     <button onClick={clickCentro} disabled={!centro}>Centro</button>
     <button onClick={clickDerecho} disabled={!derecho}>Derecho</button>
    </>
  )
}

export default App
