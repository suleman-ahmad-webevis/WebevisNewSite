import React from "react";
import {
  QuestionHead,
  StyledQuestionMain,
  StyledQuestionWrraper,
} from "./Question.styles";
import QA from "./QA";

const Question = ({ bg }) => {
  return (
    <StyledQuestionWrraper bg={bg}>
      <StyledQuestionMain>
        <QuestionHead>
          <h3>Interested In Learning More?</h3>
          <p>
            You can find relevant information about our company and services by
            browsing through the following FAQs. Please get in touch with us for
            more details.
          </p>
        </QuestionHead>
        <QA />
      </StyledQuestionMain>
    </StyledQuestionWrraper>
  );
};

export default Question;
