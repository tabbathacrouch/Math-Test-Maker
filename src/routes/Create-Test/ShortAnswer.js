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
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import { formStyles } from "../formStyles";
import * as yup from "yup";

const signInValidationSchema = yup.object({
  question: yup.string().required("required"),
});

export const ShortAnswer = ({ testInfo, setTestInfo, index }) => {
  const classes = formStyles();
  const [state, setState] = useState({
    displayQuestion: false,
    displayACs: false,
  });

  const formik = useFormik({
    initialValues: {
      question: "",
      sampleAnswer: "",
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
      setState({
        displayQuestion: !state.displayQuestion,
        displayACs: !state.displayACs,
      });
    },
  });

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

  const handleEditButton = () => {
    setState({
      displayQuestion: !state.displayQuestion,
      displayACs: !state.displayACs,
    });
  };

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <div className={classes.textAndButton}>
            <Typography component="h1" variant="h5">
              Short Answer
            </Typography>
            <Button onClick={handleChangeQuestionTypeButton}>
              Change question type
              <ChangeHistoryIcon className={classes.icon} />
            </Button>
          </div>
          {!state.displayQuestion ? (
            <div className={classes.textAndButton}>
              <TextField
                name="question"
                label="Question"
                value={formik.values.question}
                onChange={formik.handleChange}
                error={
                  formik.touched.question && Boolean(formik.errors.question)
                }
                helperText={formik.touched.question && formik.errors.question}
                className={classes.fields}
              />
              <Button onClick={formik.handleSubmit} className={classes.button}>
                <SaveIcon className={classes.icon} />
              </Button>
            </div>
          ) : (
            <div className={classes.textAndButton}>
              {formik.values.question}{" "}
              <div style={{ textAlign: "right" }}>
                <Button onClick={handleEditButton} className={classes.button}>
                  <EditIcon className={classes.icon} />
                </Button>
              </div>
            </div>
          )}
          {!state.displayACs ? (
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
          ) : (
            <div className={classes.acs}>{formik.values.sampleAnswer}</div>
          )}
        </Card>
      </Container>
    </div>
  );
};
