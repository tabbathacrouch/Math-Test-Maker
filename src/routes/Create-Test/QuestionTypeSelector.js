import React from "react";
import {
  Container,
  Typography,
  Card,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { formStyles } from "../formStyles";

export const QuestionTypeSelector = ({ testInfo, setTestInfo, index }) => {
  const handleChange = (event) => {
    let newArray = [...testInfo.questions];
    newArray[index] = {
      ...newArray[index],
      displayQuestionTypeSelector: false,
      questionType: event.target.value,
    };
    setTestInfo({
      ...testInfo,
      questions: newArray,
    });
  };

  const classes = formStyles();

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <Typography component="h1" variant="h5">
            Select Question Type
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="questionType"
              name="questionType"
              onChange={handleChange}
            >
              <FormControlLabel
                value="mc"
                control={<Radio />}
                label="Multiple Choice"
              />
              <FormControlLabel
                value="cb"
                control={<Radio />}
                label="Check Boxes (Multiple Response)"
              />
              <FormControlLabel
                value="sa"
                control={<Radio />}
                label="Short Answer"
              />
            </RadioGroup>
          </FormControl>
        </Card>
      </Container>
    </div>
  );
};
