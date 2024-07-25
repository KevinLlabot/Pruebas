import { useState } from 'react';


function App() {
  const [numero, setNumero] = useState("")
  const [listanum, setListaNum] = useState([])

  const agregarNumeroAlista = (e) => {
    e.preventDefault()
    setListaNum([...listanum , parseInt(numero)])
    setNumero("")
  }

  const sacarParImpar = () => {
      if (listanum.length === 0){
        alert("No hay numeros ingresados")
        return;
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
      alert("La cantidad de numeros pares es: "+pares.length)
      alert("La cantidad de numeros impares es :"+impares.length)
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
        alert("El mayor de la lista es: "+mayor)
        alert("El menor de la lista es: "+menor)
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
       alert("La suma de todos los numeros es: "+suma);
       alert("La cantidad de numeros es: "+listanum.length)
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
      alert("El promedio es: " + suma/listanum.length)
    }
   }

   const ordenarLista = () => {
    if (listanum.length === 0) {
      alert("No hay numeros ingresados.")
    } else {
      let nuevaLista = [...listanum]
      nuevaLista.sort((a , b) => a - b)
      setListaNum(nuevaLista)
      alert("Lista ordenada: " + nuevaLista.join(", "))
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
   
    </>
  );
}

export default App;