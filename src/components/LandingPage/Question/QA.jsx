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
import Link from "next/link";

const QA = ({ data }) => {
  const [toggle, setToggle] = useState(null);
  const handelClick = (index) => {
    // setToggle(index);
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };
  return (
    <StyledQA>
      {data.map((elem, ind) => (
        <MainWrapper key={ind}>
          <QuestionWrapper
            onClick={() => handelClick(ind)}
            align={toggle == ind ? "flex-start" : "center"}
            className={toggle === ind ? "expanded" : ""}
          >
            <QuestionNumber onClick={() => handelClick(ind)}>
              <Number color={toggle == ind ? "#28b781" : "#A1A1A1"}>
                <h6>0{ind + 1}</h6>
              </Number>
              <QuestionAnswer color={toggle == ind ? "#28b781" : "#A1A1A1"}>
                <h2>{elem.question}</h2>
              </QuestionAnswer>
            </QuestionNumber>

            <ShowAnswer>
              {toggle == ind ? (
                <RemoveIcon onClick={() => handelClick(ind)} />
              ) : (
                <AddIcon onClick={() => handelClick(ind)} />
              )}
            </ShowAnswer>
          </QuestionWrapper>
          <Answer height={toggle == ind ? "1000px" : "0"}>
            {elem.answer?.map((elem, ind) => (
              <p key={ind}>{elem}</p>
            ))}
            {elem.option?.map((elem, ind) => (
              <ul key={ind}>
                <li>
                  <Link href={`${elem.link}`}>{elem.name}</Link>
                </li>
              </ul>
            ))}
            <p>{elem.answer2}</p>
          </Answer>
        </MainWrapper>
      ))}
    </StyledQA>
  );
};

export default QA;
