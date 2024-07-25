import { useState } from "react";

export default function Entrada() {
    const [texto, setTexto] = useState("")
    const [entrada, setEntrada] = useState("")

    const modificar =()=>{
        setTexto(entrada)
    }

    return (
    <>
    <input onChange={(e)=>{setEntrada(e.target.value)}}/>
    <p> Texto ingresado:{texto}</p>
    <button onClick={modificar}>Cambiar texto</button>
    </>
    )
}