import { useState } from "react";

export default function Tramos(){
    const [tramos] = useState([
        {Nombre: "Cordoba", Distancia:400},
        {Nombre: "La Rioja", Distancia:100},
        {Nombre: "Chilecito",Distancia:200},
        {Nombre: "Chamical",Distancia:300},
        {Nombre: "Patquia",Distancia:150},
    ])
    const [promedio,setPromedio]= useState(0)
    const [listaOrdenada,setListaOrdenada]= useState([])
    //const [mayor,setMayor]=useState("")

    function Ordenar(){
        const l=[...tramos].sort((a,b)=>a.Distancia-b.Distancia) //menor a mayor
        setListaOrdenada(l)   
    }

    function Calcular(){
        const suma= tramos.reduce((suma,tramo)=> suma+tramo.Distancia,0)
        const pr=suma/tramos.length
        setPromedio(pr)
    }

    return (
        <>
            <h1>Tramos</h1>
            <ol>
                {tramos.map((tramo,index)=> 
                    {return <li key={index}>
                        <strong>Nombre:</strong>{tramo.Nombre} - <strong>Distancia:</strong>{tramo.Distancia}km</li>})}
            </ol>

            <button onClick={Ordenar}>Ordenar</button>


            <ol>
                {listaOrdenada.map((tramo,index)=>
                    {return <li key={index}>
                        <strong>Nombre:</strong>{tramo.Nombre} - <strong>Distancia:</strong>{tramo.Distancia}</li>})}
            </ol>

            <button onClick={Calcular}>Calcular promedio</button>
            <p>Promedio: {promedio}km</p>

            <p>El tramo mas largo es de: {Math.max(...tramos.map(o => o.Distancia))}km</p>
            <p>El tramo mas corto es de: {Math.min(...tramos.map(o => o.Distancia))}km</p>
        </>


    )

}