import { useState } from "react";

export default function Formulario(){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [altura,setAltura]=useState(0)
    const [email,setEmail]=useState("")
    const [mensaje,setMensaje]=useState("")
    const [color,setColor]=useState("black")

    function Validacion(e){
        let ac=0
        if (nombre.length<50 && apellido.length<50){
            ac++
        }
        else{
            alert("El nombre y el apellido deben tener menos de 50 caracteres")
        }

        if (parseInt(edad)>=18 && parseInt(edad)>0){
            ac++
        }
        else{
            alert("Debe ser mayor de edad")
        }

        if (parseInt(altura)>0 && parseInt(altura)<230){
            ac++
        }
        else{
            alert("La altura debe ser menor a 230cm")
        }

        if (email.includes("@")){
            ac++
        }
        else{
            alert("Revise el correo electronico")
        }

        if(ac==4){
            setMensaje("Todos los datos son correctos")
            setColor("green")
        }
        else{
            setMensaje("Revise los datos")
            setColor("red")
        }
        
        e.preventDefault()
    }


    return (
        <>
        <form onSubmit={Validacion}>
            <h1>Ingrese sus datos</h1>

            <div>
            <label htmlFor="Nombre">Nombre:</label>
            <input type="text" id="Nombre" onChange={(e)=>(setNombre(e.target.value))} required />
            </div>
            
            <div>
            <label htmlFor="Apellido">Apellido:</label>
            <input type="text" id="Apellido" onChange={(e)=>(setApellido(e.target.value))} required/>
            </div>
            
            <div>
                <label htmlFor="Edad">Edad:</label>
                <input type="number" id="Edad" onChange={(e)=>(setEdad(e.target.value))} required/>
            </div>

            <div>
                <label htmlFor="Altura">Altura:</label>
                <input type="number" id="Altura" onChange={(e)=>(setAltura(e.target.value))} required/>
            </div>

            <div>
                <label htmlFor="Email">Correo electronico:</label>
                <input type="text" id="Email" onChange={(e)=>(setEmail(e.target.value))} required/>
            </div>

            <p></p>
            <button type="submit">Validar</button>
         </form>

         <p style={{color:color}}>{mensaje}</p>
        </>

    )
}