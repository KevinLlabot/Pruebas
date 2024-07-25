import { useState , useEffect } from 'react';


function App() {
 const [nombre, setNombre] = useState("")
 const [apellido, setApellido] = useState("")
 const [edad, setEdad] = useState("")
 const [altura, setAltura] = useState("")
 const [correo, setCorreo] = useState("")
 const [mensaje, setMensaje] = useState([])
 const [colorMensaje, setColorMensaje] = useState([])
 const [validarForm, setvalidarForm] = useState("")

 useEffect(() =>{
  let mensajesTemp = []
  let colorMensajeTemp = []
  let valido = true

  if (nombre.trim() === "" || nombre.length > 50){
    mensajesTemp.push("Nombre vacio o exedio los 50 caracteres")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✓")
    colorMensajeTemp.push("green")
  }

  if (apellido.trim() === "" || apellido.length > 50){
    mensajesTemp.push("Apellido vacio o exedio los 50 caracteres")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✓")
    colorMensajeTemp.push("green")
  }
  
  if (edad.trim() === "" || edad <= 0 || edad < 18) {
    mensajesTemp.push("Tiene que ser mayor de edad o ingreso una edad incorrecta")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✓")
    colorMensajeTemp.push("green")
  }

  if (altura.trim() === "" || altura <= 0 || altura > 230){
    mensajesTemp.push("Ingrese una altura correcta menor a 230 cm")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✓")
    colorMensajeTemp.push("green")
  }

  if (correo.trim() === "" || !/[@#$%&]/.test(correo)){
    mensajesTemp.push("Correo vacio, o tiene que contener al menos un signo '@,#,$,%,&'")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✓")
    colorMensajeTemp.push("green")
  }

  setMensaje(mensajesTemp)
  setColorMensaje(colorMensajeTemp)
  setvalidarForm(valido)

 },[nombre, apellido , edad , altura , correo ])

 function enviarform(e) {
    e.preventDefault();
    if (validarForm){
      alert("formulario enviado.")
    } else {
      alert("Error")
    }
  }
  

  return (
    <>
    <form id='formulario' onSubmit={enviarform}>
      <label htmlFor="nombre">Nombre: </label> <br />
      <input type="text" placeholder='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} /> <br /> <br />
      <label htmlFor="apellido">Apellido: </label> <br />
      <input type="text" placeholder='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} /> <br /> <br />
      <label htmlFor="edad">Edad:</label> <br />
      <input type="number" placeholder='edad' value={edad} onChange={(e) => setEdad(e.target.value)} />  <br /> <br />
      <label htmlFor="altura">Altura (Cm): </label> <br />
      <input type="number" placeholder='altura' value={altura} onChange={(e) => setAltura(e.target.value)}/> <br /> <br />
      <label htmlFor="correo">Correo Electronico: </label> <br />
      <input type="mail" placeholder='mail' value={correo} onChange={(e) => setCorreo(e.target.value)} /> <br /> <br />
      <button type='submit'>Enviar</button>
      <div>
        {mensaje.map((msj , index) => (
          <p key={index} style={{color: colorMensaje[index]}}>{msj}</p>
        ))}
      </div>
    </form>
    </>
  );
}

export default App;