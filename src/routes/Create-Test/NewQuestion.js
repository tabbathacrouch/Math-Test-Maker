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

export const NewQuestion = ({ setQuestionType }) => {
  const handleChange = (e) => {
    setQuestionType(e.target.value);
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
                label="Check Boxes (Multiple Reponse)"
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
