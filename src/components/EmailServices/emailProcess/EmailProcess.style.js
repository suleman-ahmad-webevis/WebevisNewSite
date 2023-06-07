import styled from "styled-components";
import img1 from "../../EmailServices/assests/questionbg.png";

export const EmailSection = styled.section`
  background-image: url(${img1.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 0;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const EmailText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const QuestionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 98%;
  margin: 3rem auto 0 auto;
  gap: 2rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 28%;
  height: 250px;
  overflow-y: scroll;
  @media screen and (max-width: 769px) {
    width: 98%;
    margin: 0 auto;
    height: 200px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #d9d9d9;
    border-radius: 24px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    border-radius: 24px 24px 0px 0px;
  }
`;
export const Questions = styled.div`
  background: ${({ color }) => (color ? color : "none")};
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 90%;

  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Answer = styled.div`
  width: 70%;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 769px) {
    width: 98%;
    margin: 0 auto;
  }
`;
