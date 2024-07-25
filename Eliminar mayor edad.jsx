import { useState , useEffect } from 'react';


function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState("");
  const [lista, setLista] = useState([]);
  const [mensaje, setMensaje] = useState("")
  const [mensaje2, setMensaje2] = useState("")
  const [colorFondo , setColorFondo] = useState("")

  const agregarPersona = (e) => {
    e.preventDefault()
    if (nombre && edad){  
    setLista([...lista , {nombre , edad: parseInt(edad)}])
    setNombre("")
    setEdad("")
    setColorFondo("yellow")
  }
  }
  const sacarPromedio = () => {
    let suma = 0
    lista.forEach(element => {
      suma += element.edad
    });
    return suma / lista.length
  }

  const eliminarPersonaMayor = () =>{
   if (lista.length === 0 ) return;

   let mayor = lista[0].edad
   let indexMayor = 0;

   lista.forEach((persona , indice) => {
     if (persona.edad > mayor){
      mayor = persona.edad
      indexMayor = indice
     }
     if (persona.edad >= 18){  
     const listaNueva = lista.filter((_ , i) => i !== indexMayor)
     setLista(listaNueva)
    }
   });
   
  };
  
  
  useEffect(()=> {
  let mayorDeEdad = false;

  lista.forEach(element => {
    if (element.edad >= 18){
      mayorDeEdad = true;
    }
  });

    if (mayorDeEdad){
      setMensaje("Hay una persona mayor de edad.")
    } else {
      setMensaje("")
    }

    if (lista.length > 0){
      setMensaje2("El promedio de las edades es: "+sacarPromedio())
    }
  }, [lista])

  

  return (
    <>
    <form id='formulario' onSubmit={agregarPersona}>
    <label htmlFor="nombre">Nombre: </label>
    <input type="text" value={nombre}  onChange={(e) => setNombre(e.target.value) } />
    <label htmlFor="edad">Edad: </label>
    <input type="number" value={edad}  onChange={(e) => setEdad(e.target.value) }/> <br />
    <button type='submit'>Agregar</button>
    <button onClick={eliminarPersonaMayor}>Eliminar persona mayor de edad</button>
    <div>
      {lista.map((persona , indice) => (  
        <p key={indice} style={{backgroundColor: colorFondo}}>Nombre: {persona.nombre} - Edad: {persona.edad}</p>
      ))}
    </div>
    <div>
      {mensaje} <br />
      {mensaje2} <br />
    </div>
    </form>

    </>
  );
}

export default App;