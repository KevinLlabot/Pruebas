import { useState } from 'react'; 

function App() {
  const [listado, setListado] = useState(["Kevin" , "Pedro" , "Enrique" , "Rodolfo" , "Maxi"])
  const [nombre, setNombre] = useState("")

  const agregarPersona = (e) => {
    if (nombre.trim() === ""){
      alert("Nombre vacio")
    } else { 
    e.preventDefault()
   setListado([...listado , nombre])
   setNombre("")
  }
  }

  const eliminarPersona = (persona) => {
    if (confirm("Seguro desea eliminar a "+persona))
    setListado(listado.filter((p) => p !== persona))
  }
  return (
    <>
    <form id='formulario' onSubmit={agregarPersona}>
      <label htmlFor="nombre">Ingrese nombre: </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type='submit'>Agregar</button>
    </form>
    {listado.map((persona , index) => (
      <ul key={index}><li>{persona} <button onClick={() => eliminarPersona(persona)}>Eliminar</button></li></ul>
    ))}
    </>
  );
}

export default App;