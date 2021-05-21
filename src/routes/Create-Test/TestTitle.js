import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Container,
  TextField,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { formStyles } from "../formStyles";
import * as yup from "yup";

const signInValidationSchema = yup.object({
  title: yup.string().required("required"),
});

export const TestTitle = ({ testInfo, setTestInfo }) => {
  const classes = formStyles();

  const [displayTitle, setDisplayTitle] = useState(false);
  // update onSubmit function to handle edit button?
  // add validation to not allow two tests with the same name

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: () => {
      setTestInfo({ ...testInfo, testName: formik.values.title });
      setDisplayTitle(!displayTitle);
    },
  });

  const handleEditButton = () => {
    formik.resetForm();
    setDisplayTitle(!displayTitle);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <Typography component="h1" variant="h5">
            Test Title
          </Typography>
          {!displayTitle ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                className={classes.fields}
              />
              <Button onClick={formik.handleSubmit} className={classes.button}>
                <SaveIcon className={classes.icon} />
              </Button>
            </div>
          ) : (
            <div className={classes.testTitle}>
              {formik.values.title}{" "}
              <div style={{ textAlign: "right" }}>
                <Button onClick={handleEditButton} className={classes.button}>
                  <EditIcon className={classes.icon} />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};
