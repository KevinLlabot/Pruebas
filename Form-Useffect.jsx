import { useState } from 'react'; 

function App() {
const [nombre, setNombre] = useState("") 
const [apellido, setApellido] = useState("") 
const [edad, setEdad] = useState("") 
const [mail, setMail] = useState("") 
const [contraseña, setContraseña] = useState("") 
const [confirmarContraseña, setConfirmarContraseña] = useState("") 
const [mensajes, setMensajes] = useState([]) 
const [colorMensaje, setColorMensaje] = useState([])
const [formValido, setFormvalido] = useState(false)

useEffect(()=> {
  let mensajesTemp = []
  let colorMensajeTemp = []
  let valido = true;

  if (nombre.trim() === "" || nombre.length < 8){
    mensajesTemp.push("Nombre vacio o menor a 8 caracteres.")
    colorMensajeTemp.push("red")
    valido = false
  } else {
    mensajesTemp.push("✔")
    colorMensajeTemp.push("green")
  }


if (apellido.trim() === "" || apellido.length < 8){
  mensajesTemp.push("Apellido vacio o menor a 8 caracteres.")
  colorMensajeTemp.push("red")
  valido = false
} else {
  mensajesTemp.push("✔")
  colorMensajeTemp.push("green")
}

if (edad.trim() < 0 || edad.trim() < 18){
  mensajesTemp.push("no puede ser menor de edad o ingresar una edad numerica correcta.")
  colorMensajeTemp.push("red")
  valido = false
} else {
  mensajesTemp.push("✔")
  colorMensajeTemp.push("green")
}

if (!/[@,#,$,%,&]/.test(mail)) {
  mensajesTemp.push("El mail debe contener un formato de mail, Ej: '@gmail.com'")
  colorMensajeTemp.push("red")
  valido = false
} else {
  mensajesTemp.push("✔")
  colorMensajeTemp.push("green")
}

if (!/\d/.test(contraseña) || /\s/.test(contraseña) || !/[@,#,$,%,&]/.test(contraseña) || contraseña.length  < 8 ){
  mensajesTemp.push("La contraseña debe ser mayor a 8 caracteres, incluir al menos un numero y un signo. no debe contener espacios.")
  colorMensajeTemp.push("red")
  valido = false
} else {
  mensajesTemp.push("✔")
  colorMensajeTemp.push("green")
}

if (contraseña === "" || contraseña !== confirmarContraseña){
  mensajesTemp.push("Las contraseñas no coinciden..")
  colorMensajeTemp.push("red")
  valido = false
} else {
  mensajesTemp.push("✔")
  colorMensajeTemp.push("green")
}
setColorMensaje(colorMensajeTemp)
setMensajes(mensajesTemp)
setFormvalido(valido)
}, [nombre , apellido , edad , mail , contraseña , confirmarContraseña])

const enviarFormulario = (e) => {
 e.preventDefault()
 if (formValido){
  alert("Formulario enviado")
 } else{
  alert("Error")
 }
}


   
  return (
    <>
    <form id='formulario' onSubmit={enviarFormulario}>
      <label htmlFor="nombre">Nombre: </label> <br />
      <input type="text" id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} /> <br />
      <label htmlFor="apellido">Apellido: </label> <br />
      <input type="text" id='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}/> <br />
      <label htmlFor="edad">Edad: </label> <br />
      <input type="number" id='edad' value={edad} onChange={(e) => setEdad(e.target.value)}/> <br />
      <label htmlFor="mail">Mail: </label> <br />
      <input type="mail" id='mail' value={mail} onChange={(e) => setMail(e.target.value)} /> <br />
      <label htmlFor="password">Contraseña: </label> <br />
      <input type="password" id='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} /> <br />
      <label htmlFor="confirmarContraseña">Confimar contraseña: </label> <br />
      <input type="password" id='confirmarcontraseña' value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} /> <br />
      <button type='submit'>Enviar</button> <br />
    </form>
    <div>
      {mensajes.map((msj , index) => (
       <p key={index} style={{color: colorMensaje[index]}}>{msj}</p>
      ))}
    </div>
    </>
  );
}

export default App;