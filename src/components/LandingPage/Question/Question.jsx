import React from "react";
import {
  QuestionHead,
  StyledQuestionMain,
  StyledQuestionWrraper,
} from "./Question.styles";
import QA from "./QA";

const Question = () => {
  return (
    <StyledQuestionWrraper>
      <StyledQuestionMain>
        <QuestionHead>
          <h3>Want to know More?</h3>
          <p>
            Explore the following FAQs to attain relevant information concerning
            different aspects of our company, products and services. Feel free
            to contact us for further information.
          </p>
        </QuestionHead>
        <QA />
      </StyledQuestionMain>
    </StyledQuestionWrraper>
  );
};

export default Question;
