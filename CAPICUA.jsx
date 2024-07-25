import { useState, useEffect } from 'react'; 

function App() {
  const [numero, setNumero] = useState("")
  const [mensajes, setMensajes] = useState([])
  const [esCapicua , setEsCapicua] = useState("")
 
  const verificarCapicua = () => {
    const numeroReves = numero.split('').reverse().join('');
    setEsCapicua(numero === numeroReves)
    
  }

 
 useEffect( () => {
  let mensajesTemp = []
  verificarCapicua()
   if (numero === ""){
    mensajesTemp.push("No se ha ingresado ningun numero")
   } else { 
  if (numero > 0 ){
     mensajesTemp.push("El numero ingresado es positivo")
   } else if ( numero < 0){
     mensajesTemp.push("El numero ingresado es negativo")
   } else {
    mensajesTemp.push("El numero ingresado es cero")
   }
   if (numero % 2 === 0){
    mensajesTemp.push("El numero ingresado es par.")
   } else {
    mensajesTemp.push("El numero ingresado es impar.")
   }
   if (numero %  7 === 0){
    mensajesTemp.push("El numero ingresado es multiplo de 7")
   } else {
     mensajesTemp.push("")
   }
   if (esCapicua){
    mensajesTemp.push("El numero es capicua")
   } else {
    mensajesTemp.push("")
   }
  

  }

   setMensajes(mensajesTemp)
  })
  return (
    <>
    <label htmlFor="numero">Ingrese un numero: </label>
    <input type="number" id='numero' value={numero} onChange={(e) => setNumero(e.target.value)} /> <br />
    <div>
      {mensajes.map((msj , index) => (
        <p key={index}>{msj}</p>
      ))}
    </div>
    </>
  );
}

export default App;