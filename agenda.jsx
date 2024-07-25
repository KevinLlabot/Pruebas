import { useState } from "react"

export default function Agenda(){
    const [lista, setLista] = useState([])
    const [tarea, setTarea] = useState("")


    return (
        <>
        <div className="contenedor">
            <h1>Agenda</h1>
            <input type="text" placeholder="Ingrese la tarea" onChange={(e) => setTarea(e.target.value)}/>
            <button onClick={Agregar}>Añadir</button>
        </div>
        
        <ol>
            {lista.map((tarea, index) => <li key={index}>{tarea}
                 <button onClick={() => Quitar(index)}>X</button></li>)}
        </ol>

        </>
    )

    function Agregar(){
        setLista([...lista, tarea])
        
    }

    function Quitar(tarea){
        if (confirm(`Esta seguro de quitar a "${tarea}"?`)) {
        setLista(lista.filter((p) => p !== tarea))
    }
        
    }
        
}