import React, { useState } from "react";
import {
  AddIcon,
  Answer,
  Detail,
  MainWrapper,
  Number,
  QuestionAnswer,
  QuestionNumber,
  QuestionWrapper,
  RemoveIcon,
  ShowAnswer,
  StyledQA,
  TextDetail,
} from "./QA.styles";
import { reactQuestionData } from "./QuestionData";

const QA = ({ data = reactQuestionData }) => {
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
        <MainWrapper
          onClick={() => handelClick(ind)}
          key={ind}
          shadow={
            toggle === ind ? "0px 3px 9px 0px rgba(40, 183, 129, 0.62)" : ""
          }
        >
          <QuestionWrapper align={toggle == ind ? "flex-start" : "center"}>
            <QuestionNumber onClick={() => handelClick(ind)}>
              <QuestionAnswer color={toggle == ind ? "#28b781" : " #434956"}>
                <h2>{elem.question}</h2>
              </QuestionAnswer>
            </QuestionNumber>

            <ShowAnswer rotate={toggle == ind ? "180deg" : ""}>
              {toggle == ind ? (
                <AddIcon
                  onClick={() => handelClick(ind)}
                  color={toggle == ind ? "#28B781" : ""}
                />
              ) : (
                <AddIcon onClick={() => handelClick(ind)} />
              )}
            </ShowAnswer>
          </QuestionWrapper>
          <Answer
            height={toggle == ind ? "700px" : "0"}
            paddingTop={toggle == ind ? "15px" : ""}
          >
            <Detail>{elem.detail}</Detail>

            {elem.title?.map((item, ind) => (
              <>
                {item.heading && (
                  <div key={ind} className="Answer-Heading">
                    <h4>{ind + 1}.</h4>
                    <h3 key={ind}>{item.heading}</h3>
                  </div>
                )}

                <TextDetail
                  marginbtm={item.heading ? "" : "0 0 10px 15px"}
                  addBefore={item.heading ? false : true}
                >
                  {item.answer}
                </TextDetail>
              </>
            ))}
            <p>{elem.answer}</p>
          </Answer>
        </MainWrapper>
      ))}
    </StyledQA>
  );
};

export default QA;
