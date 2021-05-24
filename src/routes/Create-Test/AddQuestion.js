import React from "react";
import { Container, Typography, Card, Button } from "@material-ui/core";
import { formStyles } from "../formStyles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const AddQuestion = ({ testInfo, setTestInfo }) => {
  const classes = formStyles();

  const handleAddQuestion = () => {
    setTestInfo({
      ...testInfo,
      questions: [
        ...testInfo.questions,
        {
          displayQuestionTypeSelector: true,
          questionType: "",
          questionInfo: "",
        },
      ],
    });
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.addQuestion}>
        <Card className={classes.card}>
          <Button className={classes.button} onClick={handleAddQuestion}>
            <AddCircleIcon className={classes.icon} />
          </Button>
          <Typography variant="h6">Add a Question</Typography>{" "}
        </Card>
      </div>
    </Container>
  );
};
