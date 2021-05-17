import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { AddQuestion } from "./AddQuestion";
import { CheckBoxes } from "./CheckBoxes";
import { MultipleChoice } from "./MultipleChoice";
import { QuestionTypeSelector } from "./QuestionTypeSelector";
import { ShortAnswer } from "./ShortAnswer";
import { TestTitle } from "./TestTitle";
import { formStyles } from "../formStyles";

export const CreateTest = () => {
  const [testInfo, setTestInfo] = useState({
    testName: "",
    questions: [],
  });

  const handleSaveTestButton = () => {
    console.log("testInfo", testInfo);
  };

  const classes = formStyles();

  return (
    <div className={classes.main}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ flexGrow: 1, justifyContent: "center" }}>
          <TestTitle testInfo={testInfo} setTestInfo={setTestInfo} />
        </div>
        <div style={{ position: "relative", right: 0 }}>
          <AddQuestion testInfo={testInfo} setTestInfo={setTestInfo} />
        </div>
      </div>
      {!testInfo.questions
        ? null
        : testInfo.questions.map((question, index) => (
            <div key={index}>
              {question.displayQuestionTypeSelector && (
                <QuestionTypeSelector
                  testInfo={testInfo}
                  setTestInfo={setTestInfo}
                  index={index}
                />
              )}
              {question.questionType === "mc" && (
                <MultipleChoice
                  testInfo={testInfo}
                  setTestInfo={setTestInfo}
                  index={index}
                />
              )}
              {question.questionType === "cb" && (
                <CheckBoxes
                  testInfo={testInfo}
                  setTestInfo={setTestInfo}
                  index={index}
                />
              )}
              {question.questionType === "sa" && (
                <ShortAnswer
                  testInfo={testInfo}
                  setTestInfo={setTestInfo}
                  index={index}
                />
              )}
            </div>
          ))}
      <Button onClick={handleSaveTestButton} className={classes.button}>
        Save Test
      </Button>
    </div>
  );
};
