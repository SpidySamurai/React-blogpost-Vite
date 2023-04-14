import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(username);
    auth.login(username);
  };

  if (auth.user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>LoginPage</h1>

      <form onSubmit={login}>
        <label>Escribe username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
