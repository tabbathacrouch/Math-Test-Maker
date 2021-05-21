import React, { useState } from "react";
import { useFormik } from "formik";
import { formStyles } from "../formStyles";
import * as yup from "yup";
import {
  Container,
  TextField,
  Typography,
  Card,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";

// Find a way to dynamically add answer choices.

const signInValidationSchema = yup.object({
  question: yup.string().required("required"),
  ac1: yup.string().required("required"),
  ac2: yup.string().required("required"),
  ac3: yup.string().required("required"),
  ac4: yup.string().required("required"),
});

export const CheckBoxes = ({ testInfo, setTestInfo, index }) => {
  const formik = useFormik({
    initialValues: {
      question: "",
      ac1: "",
      ac2: "",
      ac3: "",
      ac4: "",
      correctAnswer: [],
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      let newArray = [...testInfo.questions];
      newArray[index] = {
        ...newArray[index],
        questionInfo: values,
      };
      setTestInfo({
        ...testInfo,
        questions: newArray,
      });
    },
  });
  const classes = formStyles();
  const handleChangeQuestionTypeButton = () => {
    let newArray = [...testInfo.questions];
    newArray[index] = {
      ...newArray[index],
      displayQuestionTypeSelector: true,
      questionType: "",
      questionInfo: "",
    };
    setTestInfo({
      ...testInfo,
      questions: newArray,
    });
  };

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <div className={classes.textAndButton}>
            <Typography component="h1" variant="h5">
              Check Boxes (Multiple Response)
            </Typography>
            <Button onClick={handleChangeQuestionTypeButton}>
              Change question type
              <ChangeHistoryIcon className={classes.icon} />
            </Button>
          </div>
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
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                value={formik.values.ac1}
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="correctAnswer"
                  />
                }
                label={
                  <TextField
                    name="ac1"
                    label="Answer Choice 1"
                    value={formik.values.ac1}
                    onChange={formik.handleChange}
                    error={formik.touched.ac1 && Boolean(formik.errors.ac1)}
                    helperText={formik.touched.ac1 && formik.errors.ac1}
                    className={classes.fields}
                  />
                }
              />
              <FormControlLabel
                value={formik.values.ac2}
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="correctAnswer"
                  />
                }
                label={
                  <TextField
                    name="ac2"
                    label="Answer Choice 2"
                    value={formik.values.ac2}
                    onChange={formik.handleChange}
                    error={formik.touched.ac2 && Boolean(formik.errors.ac2)}
                    helperText={formik.touched.ac2 && formik.errors.ac2}
                    className={classes.fields}
                  />
                }
              />
              <FormControlLabel
                value={formik.values.ac3}
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="correctAnswer"
                  />
                }
                label={
                  <TextField
                    name="ac3"
                    label="Answer Choice 3"
                    value={formik.values.ac3}
                    onChange={formik.handleChange}
                    error={formik.touched.ac3 && Boolean(formik.errors.ac3)}
                    helperText={formik.touched.ac3 && formik.errors.ac3}
                    className={classes.fields}
                  />
                }
              />
              <FormControlLabel
                value={formik.values.ac4}
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="correctAnswer"
                  />
                }
                label={
                  <TextField
                    name="ac4"
                    label="Answer Choice 4"
                    value={formik.values.ac4}
                    onChange={formik.handleChange}
                    error={formik.touched.ac4 && Boolean(formik.errors.ac4)}
                    helperText={formik.touched.ac4 && formik.errors.ac4}
                    className={classes.fields}
                  />
                }
              />
            </FormGroup>
          </div>
        </Card>
      </Container>
    </div>
  );
};
