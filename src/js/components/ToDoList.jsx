import React, { useState } from "react";

function ToDoList() {
    const [tareas, setTareas] = useState([]);
    const [nombreTarea, setNombretarea] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioridad] = useState('importante');

    const agregarTarea = () => {
        const nuevaTarea = {
            id: Date.now(),
            nombreTarea,
            descripcion,
            prioridad
        };
        setTareas([...tareas, nuevaTarea]),
            setNombretarea('');
        setDescripcion('');
        setPrioridad('importante');
    };

    const borrarTarea = (id) => {
        setTareas(tareas.filter(tareas => tareas.id !== id));
    };

    //

    return (
        <div className="container bg-body-secondary">
            <h2 className="mb-3">Mi Lista de Tareas</h2>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre de Tarea"
                    value={nombreTarea}
                    onChange={(e) => setNombretarea(e.target.value)}
                />

                <textarea
                    className="form-control mb-2"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <select
                    className="form-control mb-2"
                    value={prioridad}
                    onChange={(e) => setPrioridad(e.target.value)}>
                    <option value={'urgente'}>Urgente</option>
                    <option value={'importante'}>Importante</option>
                    <option value={'baja'}>Baja</option>
                </select>

                <button className="btn btn-primary" onClick={agregarTarea}>Agregar</button>
            </div>

            <ul className="list-group bg-secondary">
    {tareas.length === 0 ? (
        <li className="list-group-item text-center text-muted">
            No hay tareas en este momento
        </li>
    ) : (
        tareas.map(tarea => (
            <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-start mb-1">
                <div>
                    <h5>{tarea.nombreTarea}</h5>
                    <p className="mb-1">{tarea.descripcion}</p>
                    <span className={`badge bg-${tarea.prioridad === 'urgente' ? 'danger' : tarea.prioridad === 'importante' ? 'warning' : 'secondary'}`}>
                        {tarea.prioridad}
                    </span>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => borrarTarea(tarea.id)}>Borrar</button>
            </li>
        ))
    )}
</ul>

        </div>//contenedor principal END******
    );//aqui termina el return

    //fin de la funcion ToDoList*************************************************************************************
}

export default ToDoList;