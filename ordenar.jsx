import { useState } from "react";

export default function Ordenar() {
    const [personas, setPersonas] = useState([]);
    const [nombre, setNombre] = useState("");
    const [listaOrdenada, setListaOrdenada] = useState([]);

    const handleAgregar = (e) => {
        setPersonas([...personas, nombre]);
        e.preventDefault()
    }
    const handeQuitar = (persona) => {
        if (confirm(`Esta seguro de quitar a "${persona}"?`)) {
            setPersonas(personas.filter((p) => p !== persona))
        }
            
    }

    function Ordenar(){
        if (personas.length === 0) {
            alert("No hay personas para ordenar")
        }
        else{
        //const l = [...personas].sort((a,b)=> b.length - a.length) mayor a menor
        const l = [...personas].sort()
        setListaOrdenada(l)
        }
    }

    return(
        <>
        <h1>Listado de personas</h1>
        <form onSubmit={handleAgregar}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} required onChange={(e) => setNombre(e.target.value)}/>
            <button type="submit">Agregar</button>
        </form>

        <ol>{personas.map((persona, index)=>  
            (<li key={index}>{persona} <button onClick={() => handeQuitar(persona)}>X</button></li> ))}</ol>

        <button onClick={Ordenar}>Ordenar</button>
        
        <ol>{listaOrdenada.map((persona, index)=> {return <li key={index}>{persona}</li>})}</ol>
        
        </>
    )
}