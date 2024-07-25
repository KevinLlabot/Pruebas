import { useState } from "react";

export default function Varios(){
    const [nombre,setNombre]=useState("")
    const [lista,setLista]=useState([])
    const [masLarga,setMasLarga]=useState("")
    const [masCorta,setMasCorta]=useState("")


    const Agregar = () =>{
        setLista([...lista,nombre])
        setNombre("")
    }

    const max = ()=>{
        const p= lista.reduce((a,b)=>(a.lengt>b.length)?a:b)
        setMasLarga(p)
    }

    const min = ()=>{
        const p=lista.reduce((a,b)=>(a.length<b.length)? a:b)
        setMasCorta(p)
    }

    return(
        <>
        <div>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <button onClick={Agregar}>agregar</button>
            <button onClick={max}>Palabra mas larga</button>
            <button onClick={min}>Palabra mas corta</button>
        </div>
        <ul>
            {lista.map((nombre,index)=> <li key={index}>{nombre}</li>)}
        </ul>

        <p>La palabra mas larga es:{masLarga}</p>
        <p>La palabra mas corta es:{masCorta}</p>

        </>
    )

}