import { useState } from "react";

export default function Clicks() {
    const [boton,setBoton]=useState("izquierdo")


    function click(boton){
        if (boton==="izquierdo"){
            setBoton("centro")
        }
        else if (boton==="centro"){
            setBoton("derecho")
        }
        else if (boton==="derecho"){
            setBoton("izquierdo")
        }
    }

    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button disabled={boton!=="izquierdo"} onClick={()=>click("izquierdo")}>Izquierdo</button>
        <button disabled={boton!=="centro"} onClick={()=>click("centro")}>Centro</button>
        <button disabled={boton!=="derecho"} onClick={()=>click("derecho")}>Derecho</button>
        </div>
        
        </>
    )

}