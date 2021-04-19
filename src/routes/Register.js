import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Card,
} from "@material-ui/core";
import { formStyles } from '../FormStyles';
import { registerValidationSchema } from '../FormValidation';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      // update next line to add values to database
      console.log(values);
    },
  });
  const classes = formStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Typography component="h1" variant="h5" align="center">
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className={classes.fields}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className={classes.fields}
            />
            <TextField
              id="confirmEmail"
              name="confirmEmail"
              label="Confirm Email"
              type="email"
              value={formik.values.confirmEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmEmail &&
                Boolean(formik.errors.confirmEmail)
              }
              helperText={
                formik.touched.confirmEmail && formik.errors.confirmEmail
              }
              className={classes.fields}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className={classes.fields}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              className={classes.fields}
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
              className={classes.submit}
            >
              Sign up
            </Button>
            <Link href="/signin" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
