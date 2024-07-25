import { useState } from 'react'; 

function App() {
  const [nuevaPalabra, setNuevaPalabra] = useState("")
  const [listaPalabras, setListaPalabras] = useState([])
  const [mensaje, setMensaje] = useState([])

  let mensajesTemp = []

  const agregarPalabra = (e) => {
    e.preventDefault()
    if (nuevaPalabra === ""){
      alert("Campo vacio...")
    } else { 
    setListaPalabras([...listaPalabras , nuevaPalabra])
    setNuevaPalabra("")
  }
  }

  const sacarPalabraMasLarga = () => {
    if (listaPalabras.length === ""){
      alert("No se ingreso ninguna palabra.")
    } else { 
    let masLarga = listaPalabras[0]
    listaPalabras.forEach(palabra => {
      if (palabra.length > masLarga.length){
        masLarga = palabra
      }
    })
     mensajesTemp.push("La palabra mas larga es: "+masLarga)
     mensajesTemp.push("La longitud de la palabra mas larga es: "+masLarga.length)
     setMensaje(mensajesTemp)
    }
  }
  const palabraMasCorta = () => {
    if (listaPalabras.length === ""){
      alert("No se ingreso ninguna palabra.")
    } else { 
    let masCorta = listaPalabras[0]
    listaPalabras.forEach(palabra => {
      if (palabra.length < masCorta.length){
        masCorta = palabra
      }
    })
     mensajesTemp.push("La palabra mas corta es: "+masCorta)
     mensajesTemp.push("La longitud de la palabra mas corta es: "+masCorta.length)
     setMensaje(mensajesTemp)
    }
  }

  const sacarPalindromo = () => {   
      
      listaPalabras.forEach(palabra => {
      const limpiarPalabra = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
      const palabraAlReves = limpiarPalabra.split('').reverse().join('');
      const esPalindromo = (limpiarPalabra === palabraAlReves);
        if (esPalindromo){
          mensajesTemp.push("Hay un palindromo: "+palabra)
          setMensaje(mensajesTemp)
        } else {
          mensajesTemp.push("No es palindromo.")
          setMensaje(mensajesTemp)
        }
      });
   
   
      
  }
  

  return (
    <>
   <form id='formulario' onSubmit={agregarPalabra}>
    <label htmlFor="palabras">Ingrese palabras: </label>
    <input type="text" placeholder='escriba aqui su palabra' value={nuevaPalabra} onChange={(e) => setNuevaPalabra(e.target.value)} />
    <button type='submit'>Agregar</button>
   </form> 
   <button onClick={sacarPalabraMasLarga}>Sacar palabra mas larga</button>
   <button onClick={palabraMasCorta}>Sacar palabra mas corta</button>
   <button onClick={sacarPalindromo}>Verificar si hay palindromos</button>
   <div>
    {listaPalabras.map((palabra , index) => (
      <p key={index}>{palabra}</p>
    ))}
   </div>
   <div>
    {mensaje.map((msj , index) => (
      <p key={index} style={{backgroundColor:"yellow"}}>{msj}</p>
    ))}
   </div>
    </>
  );
}

export default App;