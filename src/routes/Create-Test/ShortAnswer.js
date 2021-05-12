import React from "react";
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
  question: yup.string().required("required"),
});

export const ShortAnswer = () => {
  const formik = useFormik({
    initialValues: {
      question: "",
      sampleAnswer: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const classes = formStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <Typography component="h1" variant="h5">
            Short Answer
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              name="question"
              label="Question"
              value={formik.values.question}
              onChange={formik.handleChange}
              error={formik.touched.question && Boolean(formik.errors.question)}
              helperText={formik.touched.question && formik.errors.question}
              className={classes.fields}
            />
            <Button onClick={formik.handleSubmit} className={classes.button}>
              <SaveIcon className={classes.icon} />
            </Button>
            <Button
              onClick={() => formik.resetForm()}
              className={classes.button}
            >
              <EditIcon className={classes.icon} />
            </Button>
          </div>
          <div>
            <TextField
              name="sampleAnswer"
              label="Sample Answer"
              value={formik.values.sampleAnswer}
              onChange={formik.handleChange}
              error={
                formik.touched.sampleAnswer &&
                Boolean(formik.errors.sampleAnswer)
              }
              helperText={
                formik.touched.sampleAnswer && formik.errors.sampleAnswer
              }
              className={classes.fields}
              variant="outlined"
              multiline
              rows={8}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
};
