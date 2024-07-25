import { useState } from "react";

export default function Listas2() {
    const [personas] = useState([
        {Nombre: "Nacho", Apellido:"Soto" , Edad:19},
        {Nombre: "Anto", Apellido:"Soto" , Edad:15},
        {Nombre: "Walter", Apellido:"Soto" , Edad:52},
        {Nombre: "Maria", Apellido:"Andrada" , Edad:48}
    ]);

    return (
        <> 
            <h1>Listado de personas</h1>
            <ol>
                {personas.map((personas,index)=>
                    { return <li key={index}>
                        <strong>Nombre:</strong>{personas.Nombre}, 
                        <strong>Apellido:</strong> {personas.Apellido}, 
                        <strong>Edad:</strong> {personas.Edad}</li>})}
            </ol>
        </>
    )

}