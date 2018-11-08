import * as Yup from "yup";

export default Yup.object().shape({
  nombre: Yup.string().required("Debe ingresar un nombre"),
  apellido: Yup.string().required("Debe ingresar apellidos"),
  telefono: Yup.number().required("Debe ingresar un numero de telefono"),
  correo: Yup.string()
    .email("Correo invalido")
    .required("Debe ingresar un correo electronico")
});
