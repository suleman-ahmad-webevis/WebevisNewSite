import React, { useState, useEffect } from "react";
import {
  EmailBackground,
  EmailSection,
  EmailText,
  EmailFlex,
  EmailOne,
  EmailTwo,
  Scroll,
  QuestionWrapper,
  Question,
  Questions,
  Answer,
} from "./EmailProcess.style";
import { questionData } from "./EmailData";
import { Container } from "src/components/Container.styles";

const EmailProcess = () => {
  const [question, setQuestion] = useState(0);
  const [selected, setSelected] = useState(0);
  const background =
    "linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)";
  const handelQuestion = (ind) => {
    setQuestion(ind);
    setSelected(ind);
  };
  console.log(selected);
  return (
    <>
      <EmailSection>
        <Container className="container">
          <EmailText>
            <h1>Email Marketing Process</h1>
            <p>Email marketing strategies that work.</p>
          </EmailText>
          {
            <QuestionWrapper>
              <Question>
                {questionData.map((elem, ind) => (
                  <Questions
                    onClick={() => handelQuestion(ind)}
                    color={question == ind ? background : "none"}
                    key={ind}
                  >
                    <p>{elem.question}</p>
                  </Questions>
                ))}
              </Question>

              <Answer>
                <p>{questionData[selected]?.answer}</p>
              </Answer>
            </QuestionWrapper>
          }
        </Container>
      </EmailSection>
    </>
  );
};

export default EmailProcess;
