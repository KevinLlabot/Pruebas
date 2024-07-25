import { useState } from "react";
import "./select.css"


export default function Select(){
    const [direccion,setDireccion]=useState("row")
    const [justificado,setJustificado]=useState("flex-start")
    const [alineado,setAlineado]=useState("flex-start")

    return (
        <>
        <div className="contenedor" 
        style={{flexDirection:direccion, justifyContent:justificado, alignItems:alineado}}>

            <div className="item1">Item 1</div>
            <div className="item2">Item 2</div>
            <div className="item3">Item 3</div>
        </div>

        <div>
            <select value={direccion} onChange={(e)=>setDireccion(e.target.value)}>
                <option value="row">Fila</option>
                <option value="column">Columna</option>
                <option value="row-reverse">Fila inversa</option>
                <option value="column-reverse">Columna inversa</option>
            </select>
        </div>
        <div>
            <select value={justificado} onChange={(e)=>setJustificado(e.target.value)}>
                <option value="flex-start">Flex start</option>
                <option value="flex-end">Flex end</option>
                <option value="center">Center</option>
                <option value="space-between">Space between</option>
                <option value="space-around">Space around</option>
            </select>
        </div>
        <div>
            <select value={alineado} onChange={(e)=>setAlineado(e.target.value)}>
                <option value="flex-start">Flex-start</option>
                <option value="flex-end" >Flex-end</option>
                <option value="stretch">Stretch</option>
                <option value="center">Center</option>
                <option value="baseline">Baseline</option>
            </select>
        </div>

        </>
    )
}