import * as yup from "yup";

export const signInValidationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("required"),
});

export const registerValidationSchema = yup.object({
  name: yup.string("Enter your name").required("required"),
  email: yup.string().email("Enter a valid email").required("required"),
  confirmEmail: yup
    .string()
    .required("required")
    .oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("required"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
