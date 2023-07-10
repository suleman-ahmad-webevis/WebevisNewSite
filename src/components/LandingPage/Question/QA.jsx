import React, { useState } from "react";
import {
  AddIcon,
  Answer,
  MainWrapper,
  Number,
  QuestionAnswer,
  QuestionNumber,
  QuestionWrapper,
  RemoveIcon,
  ShowAnswer,
  StyledQA,
} from "./QA.styles";
import { questionData } from "./QuestionData";

const QA = () => {
  const [toggle, setToggle] = useState(null);
  const handelClick = (index) => {
    setToggle(index);
  };
  return (
    <StyledQA>
      {questionData.map((elem, ind) => (
        <MainWrapper key={ind}>
          <QuestionWrapper
            align={toggle == ind ? "flex-start" : "center"}
            className={toggle === ind ? "expanded" : ""}
          >
            <QuestionNumber>
              <Number color={toggle == ind ? "#28b781" : "#A1A1A1"}>
                <h6>0{ind + 1}</h6>
              </Number>
              <QuestionAnswer color={toggle == ind ? "#28b781" : "#A1A1A1"}>
                <h2>{elem.question}</h2>
              </QuestionAnswer>
            </QuestionNumber>

            <ShowAnswer>
              {toggle == ind ? (
                <RemoveIcon onClick={() => handelClick(null)} />
              ) : (
                <AddIcon onClick={() => handelClick(ind)} />
              )}
            </ShowAnswer>
          </QuestionWrapper>
          <Answer height={toggle == ind ? "200px" : "0"}>
            <p>{elem.answer}</p>
          </Answer>
        </MainWrapper>
      ))}
    </StyledQA>
  );
};

export default QA;
