import { useState } from "react";
import Login from "./components/login/Login";
import Table from "./components/table/Table";
import TasksList from "./components/tasksList/TasksList";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const showLoginClickHandler = () => {
    setShowLogin(!showLogin);
  };

  const isLoggedInHandler = (value) => {
    setIsLoggedIn(value);
  };

  const closeSession = () => {
    setIsLoggedIn(false);
  };

  const tasksHandler = (value) => {
    setTasks(value);
  };

  return (
    <div className="App">
      <Table netIncomes={netIncomes} />
      {!isLoggedIn ? (
        <input
          type="button"
          value="Iniciar Sesión"
          onClick={showLoginClickHandler}
        />
      ) : null}
      {showLogin ? (
        <Login
          setShowLogin={showLoginClickHandler}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={isLoggedInHandler}
        />
      ) : null}
      {isLoggedIn ? (
        <input type="button" value="Cerrar Sesión" onClick={closeSession} />
      ) : null}
      {isLoggedIn ? <TasksList tasks={tasks} setTasks={tasksHandler} /> : null}
    </div>
  );
}

export default App;
