import { useState } from 'react'; 

function App() {
  const [palabra, setPalabra] = useState("")
  const [listaPalabras, setListaPalabras] = useState([])
  const [mensajes , setMensajes] = useState([])

  const agregarPalabra = () => {
    if (palabra.length === 0) {
      alert("Campos vacios.")
      return;
    } else { 
    setListaPalabras([...listaPalabras , palabra])
    setPalabra("")
   }
  }

  const palabraMasLarga = () => {
    let masLarga = listaPalabras[0]
    if (listaPalabras.length === 0){
      alert("Campos vacios")
    } else { 
      listaPalabras.forEach(palabra => {
        if (palabra.length > masLarga.length){
          masLarga = palabra
        }
      });
      alert("La palabra mas larga es: "+masLarga)
      alert("Su longitud es: "+masLarga.length)
    }
  }

  const palabraMasCorta = () => {
    let masCorta = listaPalabras[0]
    if (listaPalabras.length === 0){
      alert("Campos vacios")
    } else { 
      listaPalabras.forEach(palabra => {
        if (palabra.length < masCorta.length){
          masCorta = palabra
        }
      });
      alert("La palabra mas corta es: "+masCorta)
      alert("Su longitud es: "+masCorta.length)
    }
  }

  const verificarPalindromo = () => {
    listaPalabras.forEach(palabra => {
      const limpiarPalabra = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
      const palabraAlReves = limpiarPalabra.split('').reverse().join('')
      const esPalindromo = (limpiarPalabra === palabraAlReves)
      if (esPalindromo){
        alert("Hay un palindromo: "+palabra)
      }
    });
   
  }
 

  return (
    <>
    <label htmlFor="palabras">Ingrese una palabra: </label>
    <input type="text" id='palabras' value={palabra} onChange={(e) => setPalabra(e.target.value)} />
    <button onClick={agregarPalabra}>Agregar</button>
    <div style={{display:"flex" , flexDirection: "row"}}>
      {listaPalabras.map((palabra , index) => (
        <p key={index}>[{palabra}], </p>
      ))}
    </div>
    <button onClick={palabraMasLarga}>Palabra mas larga</button>
    <button onClick={palabraMasCorta}>Palabra mas corta</button>
    <button onClick={verificarPalindromo}>Sacar Palindromo</button>
      
    </>
  );
}

export default App;
