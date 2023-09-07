import React from "react";
import {
  QuestionHead,
  StyledQuestionMain,
  StyledQuestionWrraper,
} from "./Question.styles";
import QA from "./QA";
import { Container } from "src/components/Container.styles";
import { reactQuestionData } from "./QuestionData";

const Question = ({
  bg,
  heading = "Everything You Need to Know About Hiring ReactJS Developers",
  detail = "ReactJS, developed by Facebook, is an influential open-source JavaScript library renowned for crafting seamless user interfaces and web applications. Its component-based approach and virtual DOM implementation optimize performance and offer developers unparalleled flexibility in creating dynamic, modern digital experiences.",
  data = reactQuestionData,
}) => {
  return (
    <StyledQuestionWrraper bg={bg}>
      <Container>
        <StyledQuestionMain>
          <QuestionHead>
            <h2>{heading}</h2>
            <p>{detail}</p>
          </QuestionHead>
          <QA data={data} />
        </StyledQuestionMain>
      </Container>
    </StyledQuestionWrraper>
  );
};

export default Question;
