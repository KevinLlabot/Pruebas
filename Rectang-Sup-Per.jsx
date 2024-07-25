import { useState } from 'react'; 

function App() {
  const [base, setBase] = useState("")
  const [altura, setAltura] = useState("")

  const superficie = () => {
    let sup = 0
    sup = base * altura
    return alert("La superficie del rectangulo es: "+sup)
  }
  const perimetro = () => {
    let per = 0
    per = 2 * (base * altura)
    return alert("El perimetro es: "+per)
  }
  return (
    <>
    <label htmlFor="base">Ingrese base del rectangulo: </label>
    <input type="number" id='base' value={base} onChange={(e) => setBase(e.target.value)} />
    <br />
    <label htmlFor="altura">Ingrese altura del rectangulo: </label>
    <input type="number" id='altura' value={altura} onChange={(e) => setAltura(e.target.value)} />
    <br /> <br />
    <button onClick={superficie}>Superficie</button>
    <button onClick={perimetro}>Perimetro</button>
    </>
  );
}

export default App;