import {useState} from "react";

export default function Input() {
    const [numero, setNumero] = useState(0);
    return (
        <> 
        <input type="number" value={numero} onChange={(e) =>setNumero(e.target.value)} />
        <Signo numero={numero}/>
        <Paridad numero={numero}/>
        <Multiplo numero={numero}/>
        <Capicua numero={numero}/>
        </>
    )

    function Signo(props) {
        return(
            <>
            {props.numero>0 && <p>el numero es positivo</p>}
            {props.numero<0 && <p>el numero es negativo</p>}
            {props.numero==0 && <p>el numero es cero</p>}
            </>
        )
    }

    function Paridad(props) {
        return(
            <>
            {props.numero%2==0 && <p>el numero es par</p>}
            {Math.abs(props.numero%2)===1 && <p>el numero es impar</p>}
            </>
        )
    }
    function Multiplo(props) {
            return props.numero % 7 ===0 ? <p>el numero es multiplo de 7</p> : <p>el numero no es multiplo de 7</p>
        
    }

    function Capicua({numero}) {
        const numeroInvertido = parseInt(numero.toString().split("").reverse().join(""))
        return numero == numeroInvertido ? <p>el numero es capicua</p> : <p>el numero no es capicua</p>
    }
}