import React from "react";

import { useAuth } from "../../context/auth-context";

export default function Login({ history }) {
  const { login } = useAuth();

  function handleLogin() {
    login();
  }

  return (
    <div style={{ padding: 100, textAlign: "center" }}>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
