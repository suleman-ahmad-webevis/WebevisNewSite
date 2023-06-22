import React, { useState } from "react";
import {
  AddIcon,
  Answer,
  Number,
  QuestionAnswer,
  QuestionWrapper,
  RemoveIcon,
  ShowAnswer,
  StyledQA,
} from "./QA.styles";
import { BiPlus } from "react-icons/bi";
import { questionData } from "./QuestionData";

const QA = () => {
  const [toggle, setToggle] = useState(null);
  const handelClick = (index) => {
    setToggle(index);
  };
  return (
    <StyledQA>
      {questionData.map((elem, ind) => (
        <QuestionWrapper
          align={toggle == ind ? "flex-start" : "center"}
          className={toggle === ind ? "expanded" : ""}
          key={ind}
        >
          <Number color={toggle == ind ? "#28b781" : "#A1A1A1"}>
            <h6>0{ind + 1}</h6>
          </Number>
          <QuestionAnswer color={toggle == ind ? "#28b781" : "#A1A1A1"}>
            <h2>{elem.question}</h2>
            <Answer height={toggle == ind ? "450px" : "0"}>
              <p>{elem.answer}</p>
            </Answer>
          </QuestionAnswer>
          <ShowAnswer>
            {toggle == ind ? (
              <RemoveIcon onClick={() => handelClick(null)} />
            ) : (
              <AddIcon onClick={() => handelClick(ind)} />
            )}
          </ShowAnswer>
        </QuestionWrapper>
      ))}
    </StyledQA>
  );
};

export default QA;
