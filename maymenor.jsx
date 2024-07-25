import { useState } from "react";

export default function MayMenor() {
    const [lista,setLista]=useState([])
    const [numero,setNumero]=useState(0)
    const [menor,setMenor]=useState(0)
    const [mayor,setMayor]=useState(0)


    function Agregar(){
        setLista([...lista,numero])
        setNumero(0)
    }

    function Calculos(){
        if (lista.length==0){
            alert("No hay numeros en la lista")
        }
        else{
            setMayor(Math.max(...lista));
            setMenor(Math.min(...lista))
        }
    }

    return (
        <>
            <label htmlFor="entrada">Ingrese un numero</label>
            <input type="number"  id="entrada" onChange={(e) => setNumero(e.target.value)} />
            <button onClick={Agregar}>Ingresar</button>

            <ol>
                {lista.map((numero,index)=> (<ul key={index}>{numero}</ul>) )}
            </ol>

            <button onClick={Calculos}>Mayor y menor</button>
            <p>El mayor es: {mayor}</p>
            <p>El menor es: {menor}</p>

        </>
    )

}