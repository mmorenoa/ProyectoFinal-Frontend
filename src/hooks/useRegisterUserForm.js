import { createForm } from "@createform/react";
import { object, string, date } from "yup";

const validationSchema = object().shape({
  username: string().required("El nombre de usuario es obligatorio."),
  email: string()
    .email("No tiene un formato de email válido.")
    .required("El email es obligatorio."),
  password: string().required("La contraseña es obligatoria."),
  birthDate: date().required("La fecha es obligatoria"),
});

export const useRegisterUserForm = createForm({
  initialValues: {
    username: "",
    email: "",
    password: "",
    birthDate: "",
    profileUrl: "",
  },
  validationSchema,
  mode: "onChange",
});
