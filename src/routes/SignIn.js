import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Card,
  Grid,
} from "@material-ui/core";
import { formStyles } from "../FormStyles";
import { signInValidationSchema } from "../FormValidation";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      // update next line to check login credentials against database
      console.log(values);
    },
  });
  const classes = formStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
              className={classes.submit}
            >
              log in
            </Button>
            <Grid container>
              <Grid item xs>
                {/* ***href needs to be updated*** */}
                <Link href="/signin" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
