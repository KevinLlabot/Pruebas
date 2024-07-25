import { useState } from "react";

export default function Incrementar(){
    const [numero,setNumero]=useState(0)

    return (
        <>
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div>
            <label style={{display:"block"}}>{numero}</label>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
            <button onClick={()=>setNumero(numero-1)} disabled={numero<=0}>Decrementar</button>
            <button onClick={()=>setNumero(0)}>Reiniciar</button>
            </div>
            
        </div>
        </>
    )

}