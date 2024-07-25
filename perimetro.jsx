import { useState } from "react";

export default function Perimetro() {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    return (
        <><><input type="number" onChange={(e) => setBase(e.target.value)}  placeholder="Ingrese la base" />
            <input type="number" onChange={(e) => setAltura(e.target.value)} placeholder="Ingrese la altura" /> 
            </><button onClick={CalcPerimetro}>Calcular perimetro</button>
            <button onClick={CalcSuperficie}>Calcular superficie</button>
        </>
    )

    function CalcPerimetro(){
        const b = parseInt(base);
        const a = parseInt(altura);
        const p = 2 * (b + a);
        alert("El perimetro es: " + p);
    }
    function CalcSuperficie(){
        const b = parseInt(base);
        const a = parseInt(altura);
        const s = b * a;
        alert("La superficie es: " + s);
    }

}