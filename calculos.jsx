import { useState } from "react";

export default function Calculos(){
    const [resultado,setResultado]=useState(0)
    const [numero,setNumero]=useState("")

    return(
        <>
        <label htmlFor="">Ingrese un numero</label>
        <input value={numero} type="number" onChange={(e)=>setNumero(e.target.value)} />

        <div>
            <p>{resultado}</p>
            <button onClick={()=>{setResultado(resultado+ Number(numero)), setNumero("")}}>Sumar</button>
            <button onClick={()=>{setResultado(resultado-Number(numero)), setNumero("")}}
                disabled={numero>resultado}>Restar</button>
            <button onClick={()=>{setResultado(0),setNumero("")}}>Reiniciar</button>
        </div>
        </>
    )
}