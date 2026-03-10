import { useState } from "react";

function GestorTareas() {

  const [tareas, setTareas] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");

  const agregarTarea = () => {
    if (textoTarea.trim() === "") return;

    const nuevaTarea = {
      id: Date.now(),
      texto: textoTarea,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTextoTarea("");
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const toggleCompletada = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  return (
    <div>

      <h2>Gestor de Tareas</h2>

      <div>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={textoTarea}
          onChange={(e) => setTextoTarea(e.target.value)}
        />

        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <h3>Total de tareas: {tareas.length}</h3>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>

            <span
              onClick={() => toggleCompletada(tarea.id)}
              style={{
                textDecoration: tarea.completada ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {tarea.texto}
            </span>

            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default GestorTareas;