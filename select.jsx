import { useState } from "react";

export default function Select() {
    const [colorTexto, setColorTexto] = useState("black")
    const [colorFondo, setColorFondo] = useState("white")

    return (
        <>
        <p className="Texto" style={{color: colorTexto, backgroundColor: colorFondo}}>Texto</p>
        <label htmlFor="color">Color del texto</label>
        <select name="color" id="color" value={colorTexto} onChange={(e) => setColorTexto(e.target.value)}>
            <option value="black">Negro</option>
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
        </select>
        <label htmlFor="fondo">Color del fondo</label>
        <select name="fondo" id="Fondo" value={colorFondo} onChange={(e) => setColorFondo(e.target.value)}>
            <option value="white">Blanco</option>
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
        </select>
        </>
    )



}   