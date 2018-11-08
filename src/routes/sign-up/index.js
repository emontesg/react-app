import React from "react";
import { Formik, Field } from "formik";

import api from "../../services/api";
import validationSchema from "./validation-schema";
import { useAuth } from "../../context/auth-context";

const initialValues = {
  nombre: "Kevin",
  apellido: "Wolf",
  telefono: "70285995",
  correo: "hi@kevinwolf.me"
};

export default function SignUp() {
  const { login } = useAuth();

  return (
    <div className="content-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            const response = await api.addUser(values);

            if (response.status === 200) {
              actions.setSubmitting(false);
              login();
            }
          } catch (error) {
            actions.setSubmitting(false);
            alert(error);
          }
        }}
      >
        {({ errors, touched, isValid, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">
              <h1>Formulario Empleos</h1>
            </div>

            <Field
              name="nombre"
              placeholder="Nombre"
              className="form-control"
            />
            {errors.nombre &&
              touched.nombre && (
                <div className="errorMessage">{errors.nombre}</div>
              )}

            <Field
              name="apellido"
              placeholder="Apellido"
              className="form-control"
            />
            {errors.apellido &&
              touched.apellido && (
                <div className="errorMessage">{errors.apellido}</div>
              )}

            <Field
              name="telefono"
              type="phone"
              placeholder="Telefono"
              className="form-control"
            />
            {errors.telefono &&
              touched.telefono && (
                <div className="errorMessage">{errors.telefono}</div>
              )}

            <Field
              type="email"
              name="correo"
              placeholder="Correo"
              className="form-control"
            />
            {errors.correo &&
              touched.correo && (
                <div className="errorMessage">{errors.correo}</div>
              )}

            <Field name="cv" placeholder="CV" className="form-control" />

            <Field
              component="select"
              name="area"
              className="form-control js-filter-sector"
            >
              <option value="0">Todas las áreas</option>
              <option value="1">Admin:servicios generales</option>
              <option value="2">Administrativo financiero</option>
              <option value="3">Call center</option>
              <option value="4">Comercial</option>
              <option value="5">Consultoría</option>
              <option value="6">Diseño y publicidad</option>
              <option value="7">Logística / Distribución</option>
              <option value="8">Mantenimiento</option>
              <option value="9">Mercadeo</option>
              <option value="10">Planeación: proyectos</option>
              <option value="11">Serv.cliente</option>
              <option value="12">Sistemas</option>
              <option value="13">Técnica:ingenier/electric</option>
              <option value="14">Tecnología: soporte-prog y web</option>
              <option value="15">Tele mercadeó</option>
              <option value="16">Tramites</option>
              <option value="17">Ventas</option>
            </Field>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btnSubmit">
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
