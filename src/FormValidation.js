import * as yup from "yup";

export const signInValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("required"),
  });

  export const registerValidationSchema = yup.object({
    name: yup.string("Enter your name").required("required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("required"),
    confirmEmail: yup
      .string("Confirm your email")
      .required("required")
      .oneOf([yup.ref("email"), null], "Emails must match"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("required"),
    confirmPassword: yup
      .string("Confirm your password")
      .required("required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });