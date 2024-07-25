import { useState } from 'react'; 

function App() {
  const [tramo, setTramo] = useState("");
  const [distancia, setDistancia] = useState("");
  const [listaTramos, setListaTramos] = useState([]);
  const [mensajes, setMensajes] = useState([]);
  const [seleccionTramo, setSeleccionTramo] = useState(null);

  const agregarTramo = (e) => {
    e.preventDefault();
    let mensajesTemp = [];
    if (tramo.length === 0 || distancia.length === 0){
      mensajesTemp.push("Campos vacíos.");
      setMensajes(mensajesTemp);
      return;
    } 
    if (seleccionTramo !== null) {
      const actualizarTramos = listaTramos.map((t, index) => 
        index === seleccionTramo ? { tramo, distancia: Number(distancia) } : t
      );
      setListaTramos(actualizarTramos);
      setSeleccionTramo(null);
    } else {
      setListaTramos([...listaTramos , { tramo, distancia: Number(distancia) }]);
      alert("Tramo agregado con éxito.");
    }
    setDistancia("");
    setTramo("");
    setMensajes([]);
  }

  const editarTramo = (index) => {
    const tramoEditado = listaTramos[index];
    setTramo(tramoEditado.tramo);
    setDistancia(tramoEditado.distancia.toString());
    setSeleccionTramo(index);
  }

  const eliminarTramo = () => {
    if (seleccionTramo === null) {
      return;
    }
    if (window.confirm("¿Desea eliminar el tramo seleccionado?")) {
      const actualizarTramos = listaTramos.filter((_, i) => i !== seleccionTramo);
      setListaTramos(actualizarTramos);
      setSeleccionTramo(null);
      setTramo("");
      setDistancia("");
      setMensajes(["Tramo eliminado con éxito."]);
    }
  }

  const mostrarCalculos = () => {
    if (listaTramos.length === 0) {
      setMensajes(["No hay tramos para calcular."]);
      return;
    }
    const distancias = listaTramos.map(tramo => tramo.distancia);
    const promedio = distancias.reduce((a, b) => a + b, 0) / distancias.length;
    const tramoMasLargo = Math.max(...distancias);
    const tramoMasCorto = Math.min(...distancias);

    setMensajes([
      `Promedio de distancia: ${promedio.toFixed(2)} km`,
      `Tramo más largo: ${tramoMasLargo} km`,
      `Tramo más corto: ${tramoMasCorto} km`
    ]);
  }

  return (
    <>
      <form id='formulario' onSubmit={agregarTramo}>
        <label htmlFor="tramo">Nombre del tramo: </label> 
        <input type="text" id='tramo' value={tramo} onChange={(e) => setTramo(e.target.value)} />
        <br /> 
        <label htmlFor="distancia">Distancia (km): </label>
        <input type="number" id='distancia' value={distancia} onChange={(e) => setDistancia(e.target.value)} />
        <br /> <br />
        <button type='submit'>{seleccionTramo !== null ? "Actualizar Tramo" : "Agregar Tramo"}</button>
        <br /> 
      </form>
      <div>
        <h5>Tramos: </h5>
        <select onChange={(e) => editarTramo(Number(e.target.value))}>
          <option value="">Seleccione un tramo</option>
          {listaTramos.map((elemento, index) => (
            <option value={index} key={index}>{elemento.tramo} - {elemento.distancia} km</option>
          ))}
        </select>
        <button onClick={eliminarTramo} disabled={seleccionTramo === null}>Eliminar Tramo</button>
        <button onClick={mostrarCalculos}>Mostrar Cálculos</button>
      </div>
      {mensajes.length > 0 && (
        <div>
          {mensajes.map((mensaje, index) => (
            <p key={index}>{mensaje}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
