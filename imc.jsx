import { useState } from "react";
        
export default function IMC(){
    const [altura,setAltura]=useState(0)
    const [peso,setPeso]=useState(0)
    const [mensaje,setMensaje]=useState("")
    const [color,setColor]=useState("")

    function Calcular(){
        if (altura>0 && peso>0){
            const calculo=peso/(altura*altura)
            alert("Su IMC es: "+calculo)
            msg(calculo)
        }
        else{
            alert("Ingrese los datos correctos")
        }
    }

    function msg(datos){
        if (datos<18.5){
            setMensaje("Nivel bajo")
            setColor("yellow")
        }
        else if (datos>=18.5 && datos<=24.9){
            setMensaje("Nivel normal")
            setColor("green")
        }
        else if(datos>=25 && datos<=29.9){
            setMensaje("Sobrepeso")
            setColor("#ff8c00")
        }
        else if(datos>=30){
            setMensaje("Obesidad")
            setColor("red")
        }
    }

    return (
        <>
        <div>
        <label htmlFor="altura">Ingrese la altura en metros</label>
        <input type="number" id="altura" onChange={(e)=>setAltura(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="peso">Ingrese el peso en kilos</label>
        <input type="number" id="peso" onChange={(e)=>setPeso(e.target.value)} />
        </div>
        <button onClick={Calcular}>Calcular</button>
        <p style={{color:color, backgroundColor:"lightgrey",fontFamily:"Arial",fontWeight:"bold"}}>{mensaje}</p>
        </>
    )


}