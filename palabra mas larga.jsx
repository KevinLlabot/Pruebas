import { useState } from "react";

export default function Filtro(){
    const [personas, setPersonas]= useState([])
    const [nombre, setNombre]= useState("")
    const [palabra, setPalabra]= useState("")

    const Agregar = (e) => {
        setPersonas([...personas, nombre])
        setNombre("")
        e.preventDefault()
    }

    function Filtrar(){
        const palabra = personas.reduce((masLarga, palabra) => (palabra.length > masLarga.length ? palabra : masLarga))
        setPalabra(palabra)
    }


    return (
        <>
            <h1>Listado de personas</h1>
            <form onSubmit={Agregar}>
                <label htmlFor="Entrada">Ingrese el nombre de la persona</label>
                <input type="text" id="Entrada" value={nombre} required onChange={(e) => setNombre(e.target.value)}/>
                <button type="submit">Agregar</button>
            </form>

            <ol>{personas.map((persona,index)=> {return <li key={index}>{persona}</li>})}</ol>
            <button onClick={Filtrar}>Filtrar</button>
            <p>la palabra mas larga es: {palabra}</p>
        </>
    )

}