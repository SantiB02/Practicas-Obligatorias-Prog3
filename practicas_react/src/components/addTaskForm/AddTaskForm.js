import React, { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [counter, setCounter] = useState(0);

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
    console.log(task);
  };

  const addTaskHandler = () => {
    setCounter(counter + 1);
    setTasks([...tasks, { task, taskID: counter, completed: false }]);
    console.log(tasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={task}
        onChange={taskChangeHandler}
      />
      <input type="button" value="Agregar tarea" onClick={addTaskHandler} />
    </div>
  );
};

export default AddTaskForm;
