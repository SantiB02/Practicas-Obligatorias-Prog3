import React from "react";
import AddTaskForm from "../addTaskForm/AddTaskForm";

const TasksList = ({ tasks, setTasks }) => {
  const CompletedTaskClickHandler = (taskID) => {
    const updatedTasks = [...tasks]; //clono el arreglo para no modificarlo directamente
    const taskIndex = updatedTasks.findIndex((task) => task.taskID === taskID); //busco el taskID a modificar
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    setTasks(updatedTasks); //actualizo el arreglo de objetos con el arreglo clonado
  };

  const DeleteTaskClickHandler = (taskID) => {
    setTasks(tasks.filter((task) => task.taskID !== taskID));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
      {tasks.length === 0 ? <p>No hay tareas</p> : null}
      <ul>
        {tasks.map(({ task, taskID, completed }) => (
          <div key={taskID}>
            <li style={{ textDecoration: completed && "line-through" }}>
              {task}
            </li>
            <input
              type="button"
              value={
                completed
                  ? "Marcar como no completada"
                  : "Marcar como completada"
              }
              onClick={() => CompletedTaskClickHandler(taskID)}
            />
            <input
              type="button"
              value="Eliminar"
              onClick={() => DeleteTaskClickHandler(taskID)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
