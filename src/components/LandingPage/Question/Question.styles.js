import styled from "styled-components";
import questionbg from "../../../assets/images/Homemain/questionbg.png";

export const StyledQuestionWrraper = styled.div`
  background: url(${questionbg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const StyledQuestionMain = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: calc(60px + (138 - 60) * (100vw - 390px) / (1440 - 390));
  padding-left: calc(20px + (125 - 20) * (100vw - 390px) / (1440 - 390));
  padding-right: calc(20px + (125 - 20) * (100vw - 390px) / (1440 - 390));

  @media screen and (max-width: 390px) {
    padding: 60px 20px 0 20px;
  }
`;
export const QuestionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 calc(10px + (80 - 10) * (100vw - 390px) / (1440 - 390));
  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    color: #434956;
  }
`;
