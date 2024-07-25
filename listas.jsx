import { useState } from "react";

export default function Listas() {
    const [personas] = useState(["a","b","c","d","e"]);

    return(
        <>
        <h1>Listado de personas</h1>
        <ol>{personas.map((persona, index)=> {return <li key={index}>{persona}</li>})}</ol>
        </>
    )
}