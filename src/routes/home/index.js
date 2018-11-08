import React from "react";
import { Link } from "react-router-dom";

export default function Home({ children }) {
  return (
    <div className="people-header">
      <div className="btn-log">
        <Link to="/login">Iniciar Sesión</Link>
      </div>
      <div className="btn-reg">
        <Link to="/sign-up">
          Registrate ahora <br />y encuentra las mejores ofertas de trabajo en
          tu zona
        </Link>
      </div>
      {children}
    </div>
  );
}
