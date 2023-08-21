import styled from "styled-components";

export const StyledQuestionWrraper = styled.div`
  background: ${({ bg }) => (bg ? bg : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(50px + (88 - 50) * (100vw - 390px) / (1440 - 390)) 0
      calc(50px + (88 - 50) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const StyledQuestionMain = styled.div``;
export const QuestionHead = styled.div`
  padding-bottom: 40px;
  @media screen and (max-width: 1440px) {
    padding-bottom: 0 0 calc(10px + (40 - 10) * (100vw - 390px) / (1440 - 390))
      0;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
`;
