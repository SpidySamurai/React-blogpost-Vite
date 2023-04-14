import React from "react";
import { useAuth } from "../utils/auth";

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
    auth.logout();
  };

  return (
    <>
      <h1>Logout Page</h1>

      <form onSubmit={logout}>
        <label>Are u sure u want to log out?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default LogoutPage;
