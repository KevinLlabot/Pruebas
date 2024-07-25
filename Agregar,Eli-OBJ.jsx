import { useState } from 'react'; 

function App() {
  const [listado, setListado] = useState([])
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")

  const agregarPersona = (e) => {
    e.preventDefault()
    if (nombre.trim() === "" || apellido.trim() === "" || edad === ""){
      alert("Hay un campo vacio")
      return;
    } else if (edad < 18){
      alert("No puede haber persona menor de edad.")
      return;
    }
   setListado([...listado , {nombre , apellido , edad}])
   setNombre("")
   setApellido("")
   setEdad("")
  
  
  }

  const eliminarPersona = (persona) => {
    if (confirm("Seguro desea eliminar a esta persona?"))
    setListado(listado.filter((p) => p !== persona))
  }
  return (
    <>
    <form id='formulario' onSubmit={agregarPersona}>
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label htmlFor="apellido">Apellido: </label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <br />
      <label htmlFor="edad">Edad: </label>
      <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <br /> <br />
      <button type='submit'>Agregar</button>
    </form>
    {listado.map((persona , index) => (
      <ul key={index}><li>NOMBRE: {persona.nombre} {persona.apellido} - EDAD: {persona.edad} <button onClick={() => eliminarPersona(persona)}>Eliminar</button></li></ul>
    ))}
    </>
  );
}

export default App;