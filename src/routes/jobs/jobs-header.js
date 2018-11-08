import React from "react";

import { useAuth } from "../../context/auth-context";

export default function Header({ term, setTerm }) {
  const { logout } = useAuth();

  function handleTermChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="row header-jobs">
      <div className="col-md-6 jobs-txt">
        <button onClick={logout}>Log out</button>
        <p>
          Chamba Ideal es una bolsa de empleo en la web, la cobertura del
          servicio se amplía mediante la creación de convenios con empresas, las
          cuales han creado empleos vacantes. buscamos ser la web de empleo
          líder en Latinoamérica. La web ofrece a las empresas herramientas
          avanzadas para la gestión de los procesos de selección y facilita a
          los profesionales el acceso a nuevas oportunidades de trabajo.
        </p>
      </div>

      <div className="col-md-3">
        <img src="/images/logo.png" className="img-fluid" alt="" />
      </div>

      <div className="search-bar col-md-3">
        <input
          className="form-control"
          value={term}
          onChange={handleTermChange}
        />
      </div>
    </div>
  );
}
