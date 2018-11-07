import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import _, {isEmpty} from 'lodash';
import api from "../services/api";

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin : false
        };
    }
    
    async registerUser(values){
        api.addUser(values).then(response => {
            console.log(response);
           if(response.status == 200){
                this.props.onLogin(true);
           }else{
               alert(response);
           }
        });
    }
    render(){
        const SignupSchema = Yup.object().shape({
            nombre: Yup.string()
                .required('Debe ingresar un nombre'),
            apellido: Yup.string()
                .required('Debe ingresar apellidos'),
            telefono: Yup.number()
                .required('Debe ingresar un numero de telefono'),
            correo: Yup.string()
                .email('Correo invalido')
                .required('Debe ingresar un correo electronico'),
        });
        return (
            <Formik
              initialValues={{ nombre: '', apellido: '', telefono: '', correo: '', area: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                  this.registerUser(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                
              }}
              >
              {({ errors, touched, isValidating, handleSubmit })=> (
                <form className="form" onSubmit={handleSubmit}>
                <div className="title">
                    <h1>Formulario Empleos</h1>
                </div>
                  <Field name="nombre" placeholder="Nombre" className="form-control"/>
                  {errors.nombre && touched.nombre ? (
                        <div className="errorMessage">{errors.nombre}</div>
                    ) : null}
                  <Field name="apellido" placeholder="Apellido" className="form-control"/>
                  {errors.apellido && touched.apellido ? (
                        <div className="errorMessage">{errors.apellido}</div>
                    ) : null}
                  <Field name="telefono" type="phone" placeholder="Telefono" className="form-control"/>
                  {errors.telefono && touched.telefono ? (
                        <div className="errorMessage">{errors.telefono}</div>
                    ) : null}
                  <Field type="email" name="correo" placeholder="Correo" className="form-control" />
                  <Field  name="cv" placeholder="CV" className="form-control" />
                  {errors.correo && touched.correo ? (
                        <div className="errorMessage">{errors.correo}</div>
                    ) : null}
                  <Field component="select" name="area" className="form-control js-filter-sector">
                  <option value="0">
                                    Todas las áreas
                                  </option>
                                  <option value="1">
                                    Admin:servicios generales
                                  </option>
                                  <option value="2">
                                    Administrativo financiero
                                  </option>
                                  <option value="3">
                                    Call center
                                  </option>
                                  <option value="4">
                                    Comercial
                                  </option>
                                  <option value="5">
                                    Consultoría
                                  </option>
                                  <option value="6">
                                    Diseño y publicidad
                                  </option>
                                  <option value="7">
                                    Logística / Distribución
                                  </option>
                                  <option value="8">
                                    Mantenimiento
                                  </option>
                                  <option value="9">
                                    Mercadeo
                                  </option>
                                  <option value="10">
                                    Planeación: proyectos
                                  </option>
                                  <option value="11">
                                    Serv.cliente
                                  </option>
                                  <option value="12">
                                    Sistemas
                                  </option>
                                  <option value="13">
                                    Técnica:ingenier/electric
                                  </option>
                                  <option value="14">
                                    Tecnología: soporte-prog y web
                                  </option>
                                  <option value="15">
                                    Tele mercadeó
                                  </option>
                                  <option value="16">
                                    Tramites
                                  </option>
                                  <option value="17">
                                    Ventas
                                  </option>
                  </Field>
                  <div class="form-group">
                      <button type="submit" class="btn btn-primary btnSubmit">Enviar</button>
                  </div>
                </form>
              )}
              </Formik>
            
        );
    }
}


export default RegisterForm;
