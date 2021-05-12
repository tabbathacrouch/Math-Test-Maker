import React, { useState } from "react";
import { CheckBoxes } from "./CheckBoxes";
import { MultipleChoice } from "./MultipleChoice";
import { NewQuestion } from "./NewQuestion";
import { ShortAnswer } from "./ShortAnswer";
import { TestTitle } from "./TestTitle";

export const CreateTest = () => {
  const [displayQuestionTypeSelector, setDisplayQuestionTypeSelector] =
    useState(false);
  const [questionType, setQuestionType] = useState("");

  return (
    <div>
      <TestTitle
        displayQuestionTypeSelector={displayQuestionTypeSelector}
        setDisplayQuestionTypeSelector={setDisplayQuestionTypeSelector}
      />
      {displayQuestionTypeSelector && (
        <NewQuestion
          questionType={questionType}
          setQuestionType={setQuestionType}
        />
      )}
      {questionType === "mc" && <MultipleChoice />}
      {questionType === "cb" && <CheckBoxes />}
      {questionType === "sa" && <ShortAnswer />}
    </div>
  );
};
