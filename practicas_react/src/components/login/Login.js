import React, { useState } from "react";

const Login = ({ setShowLogin, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");

  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.includes("O") || event.target.value.includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUsername(event.target.value);
  };

  const RegisterClickHandler = () => {
    if (username === "" || username.includes("O") || username.includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("Usuario registrado con éxito!");
      setIsLoggedIn(true);
      setShowLogin(false);
    }
  };

  return (
    <>
      <br />
      <br />
      <input type="text" value={username} onChange={usernameChangeHandler} />
      <br />
      <input type="button" value="Registrarse" onClick={RegisterClickHandler} />
      <p>{username}</p>
    </>
  );
};

export default Login;
