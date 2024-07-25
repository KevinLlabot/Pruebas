import { useState } from "react";

export function Ejercicio8() {
  const [personas, setPersonas] = useState([
    "Pepe",
    "Maria",
    "Juanjo",
    "Pedro",
    "Cacho",
  ]);
  const [nombre, setNombre] = useState("");

  const handleAgregar = (e) => {
    if (nombre.trim() === "") {
      alert("no se puede ingresar nombre vacio");
    } else {
      setPersonas([...personas, nombre]);
      setNombre("");
    }
    e.preventDefault();
  };

  const handleQuitarPorPersona = (persona) => {
    if (confirm(`¿Desea quitar ${persona}?`)) {
      setPersonas(personas.filter((p) => p !== persona));
    }
  };

  const handleQuitarPorIndex = (index) => {
    if (confirm(`¿Desea quitar ${personas[index]}?`)) {
      const nuevasPersonas = [...personas];
      nuevasPersonas.splice(index, 1);
      setPersonas(nuevasPersonas);
    }
  };

  const handleQuitarPorIndex2 = (index) => {
    if (confirm(`¿Desea quitar ${personas[index]}?`)) {
      setPersonas(personas.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <h1>Listado de personas</h1>
      <form onSubmit={handleAgregar}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit" disabled={!nombre.trim()}>
          Agregar
        </button>
      </form>
      <ol>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona}
            <button onClick={() => handleQuitarPorIndex2(index)}>X</button>
          </li>
        ))}
      </ol>
    </>
  );
}
