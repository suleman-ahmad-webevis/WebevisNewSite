import React from "react";
import {
  QuestionHead,
  StyledQuestionMain,
  StyledQuestionWrraper,
} from "./Question.styles";
import QA from "./QA";
import { Container } from "src/components/Container.styles";

const Question = ({ bg }) => {
  return (
    <StyledQuestionWrraper bg={bg}>
      <Container>
        <StyledQuestionMain>
          <QuestionHead>
            <h2>How To Find The Best ReactJS Developers For Hire?</h2>
            <p>
              ReactJS, an open-source JavaScript library released in 2013, is
              one of the very rare technologies to achieve remarkable growth in
              the short time that it has been available. Most of ReactJS
              popularity comes from the fact that top companies like Facebook
              and Uber use it to improve their UI issues. A lot of developers
              have switched to ReactJS because of how easy it is to implement
              and how faster it gets the job done.If you’re looking to hire
              ReactJS developers for your company, this guide is going to help
              you find the perfect fit. We’ve included everything you need to
              know about hiring a freelance remote ReactJS developer.
            </p>
          </QuestionHead>
          <QA />
        </StyledQuestionMain>
      </Container>
    </StyledQuestionWrraper>
  );
};

export default Question;
