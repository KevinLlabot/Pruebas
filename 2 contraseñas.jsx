import { useState, useEffect } from 'react';

function App() {
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [colorMensajes, setColorMensajes] = useState([]);
  const [formularioValido, setFormularioValido] = useState(false);

  useEffect(() => {
    let mensajesTemp = [];
    let colorMensajesTemp = [];
    let valido = true;
    
    if (contraseña.trim() === "" || contraseña.length <= 8) {
      mensajesTemp.push("La contraseña debe ser mayor a 8 caracteres.");
      colorMensajesTemp.push("red");
      valido = false;
    } else {
      mensajesTemp.push("Contraseña tiene más de 8 caracteres.");
      colorMensajesTemp.push("green");
    }

    if (!/\d/.test(contraseña)) {
      mensajesTemp.push("La contraseña debe incluir al menos un número.");
      colorMensajesTemp.push("red");
      valido = false;
    } else {
      mensajesTemp.push("Contraseña incluye al menos un número.");
      colorMensajesTemp.push("green");
    }

    if (/\s/.test(contraseña)) {
      mensajesTemp.push("La contraseña no debe incluir espacios.");
      colorMensajesTemp.push("red");
      valido = false;
    } else {
      mensajesTemp.push("Contraseña no incluye espacios.");
      colorMensajesTemp.push("green");
    }

    if (!/[@!$%^&*]/.test(contraseña)) {
      mensajesTemp.push("La contraseña debe incluir al menos un signo (@,!,$,%,&,*).");
      colorMensajesTemp.push("red");
      valido = false;
    } else {
      mensajesTemp.push("Contraseña incluye al menos un signo.");
      colorMensajesTemp.push("green");
    }

    if (contraseña !== contraseña2) {
      mensajesTemp.push("Las contraseñas no coinciden.");
      colorMensajesTemp.push("red");
      valido = false;
    } else {
      mensajesTemp.push("Las contraseñas coinciden.");
      colorMensajesTemp.push("green");
    }

    setMensajes(mensajesTemp);
    setColorMensajes(colorMensajesTemp);
    setFormularioValido(valido);

  }, [contraseña, contraseña2]);

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (formularioValido) {
      alert('La contraseña es válida.');
    } else {
      alert('La contraseña no cumple con los requisitos.');
    }
  };

  return (
    <>
      <form id='formulario' onSubmit={enviarFormulario}>
        <label htmlFor="contraseña">Contraseña: </label> <br />
        <input type="password" id='contraseña' onChange={(e) => setContraseña(e.target.value)} /> <br /> <br />
        <label htmlFor="contraseña2">Confirmar Contraseña: </label><br />
        <input type="password" id='contraseña2' onChange={(e) => setContraseña2(e.target.value)} />
        <div>
          {mensajes.map((mensaje, index) => (
            <p key={index} style={{ color: colorMensajes[index] }}>{mensaje}</p>
          ))}
        </div>
        <button type='submit' disabled={!formularioValido}>Enviar</button>
      </form>
    </>
  );
}

export default App;
