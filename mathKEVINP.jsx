import { useState } from 'react';


function App() {
  const [numero, setNumero] = useState("")
  const [listanum, setListaNum] = useState([])
  const [mensaje, setMensaje] = useState([])

  const agregarNumeroAlista = (e) => {
    e.preventDefault()
    if (numero.length === 0 ){
      alert("Campo vacio...")
    } else { 
    setListaNum([...listanum , parseInt(numero)])
    setNumero("")
  }
  }
  let mensajesTemp = []

  const sacarParImpar = () => {
      if (listanum.length === 0){
        alert("No hay numeros ingresados")
      } else {  
      let pares = []
      let impares = []
      listanum.forEach( numero => {
        if (numero%2 === 0){
          pares.push(numero) 
        } else {
          impares.push(numero) 
        }
      });
      mensajesTemp.push("Cantidad de numeros pares: "+pares.length)
      mensajesTemp.push("cantidad de numeros impares: "+impares.length)
      setMensaje(mensajesTemp)
      }
    };

    const sacarMayoryMenor = () => {
      if (listanum.length === 0){
        alert("No hay numeros ingresados.")
      } else {
        let mayor = []
        let menor = []
        mayor.push(Math.max(...listanum))
        menor.push(Math.min(...listanum))
        mensajesTemp.push("El mayor de la lista es: "+mayor)
        mensajesTemp.push("El menor de la lista es: "+menor)
        setMensaje(mensajesTemp)
      }
    }

    const mostrarSumaDeNumeros = () => {
      if (listanum.length === 0){
        alert("No hay numeros ingresados.")
      } else {
       let suma = 0
       listanum.forEach(numero => {
        suma += numero
       });
       mensajesTemp.push("La suma de todos los numeros es: "+suma)
       mensajesTemp.push("La cantidad de numeros ingresados es: "+listanum.length)
       setMensaje(mensajesTemp)
      } 
    };
   const sacarPromedio = () => {
    if (listanum.length === 0){
      alert("No hay numeros ingresados.")
    } else {
      let suma = 0
      listanum.forEach(numero => {
        suma += numero
      });
      mensajesTemp.push("El promedio es: "+ suma/listanum.length)
      setMensaje(mensajesTemp)
    }
   }

   const ordenarLista = () => {
    if (listanum.length === 0) {
      alert("No hay numeros ingresados.")
    } else {
      let nuevaLista = [...listanum]
      nuevaLista.sort((a , b) => a - b)
      setListaNum(nuevaLista)
      mensajesTemp.push("Lista ordenada: " + nuevaLista.join(", "))
      setMensaje(mensajesTemp)
    }
   }

  return (
    <>
    <form id='formulario' onSubmit={agregarNumeroAlista}>
    <h1>Ingrese un numero: </h1>
    <input type="number" value={numero} onChange={(e)=> setNumero(e.target.value)} />
    <button type='submit'>Agregar</button> <br /> <br />
    </form>

    <button onClick={sacarParImpar}>Mostrar Pares e impares</button> <br />
    <button onClick={sacarMayoryMenor}>Mostrar Mayor y menor</button> <br /> 
    <button onClick={mostrarSumaDeNumeros}>Suma de todos los numeros y la cantidad de numeros</button> <br />
    <button onClick={sacarPromedio}>Promedio</button> <br />
    <button onClick={ordenarLista}>Ordenar lista de menor a mayor</button>
    <h2>Lista: </h2> 
    <div style={{display: "flex" , flexDirection: "row" }}>
    {listanum.map((numero , index) => ( 
      <p key={index} style={{margin: "0 10px"}}>{numero}</p>
    ))}
    </div>
    <div>
    {mensaje.map((palabra , index) => (
     <p key={index}>{palabra}</p>  
    ))}
    </div>
   
    </>
  );
}

export default App;