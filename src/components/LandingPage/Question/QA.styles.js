import styled from "styled-components";
import polygon from "../../../assets/images/Homemain/Polygon.png";
import { FaPlus, FaMinus } from "react-icons/fa";

export const StyledQA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px !important;
  margin: 0 auto;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  /* align-items: ${({ align }) => align}; */
  align-items: center;
  justify-content: space-between;
  /* padding: 10px 0; */
  gap: 1rem;
  width: 100%;
`;
export const Number = styled.div`
  /* background: url(${polygon.src}); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-size: cover; */
  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    width: calc(50px + (80 - 50) * (100vw - 390px) / (1440 - 390));
    height: calc(50px + (80 - 50) * (100vw - 390px) / (1440 - 390));
  }

  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: ${({ color }) => color};
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 928px;
  @media screen and (max-width: 1440px) {
    width: calc(230px + (928 - 230) * (100vw - 390px) / (1440 - 390));
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: ${({ color }) => color};
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (22 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #28b781;
  width: 100%;
`;
export const Answer = styled.div`
  overflow-y: hidden;
  transition: 1s all ease-in-out;
  max-height: ${({ height }) => height};
  margin-left: 100px;
  @media screen and (max-width: 1440px) {
    margin-left: calc(60px + (100 - 60) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 390px) {
    margin-left: 60px;
  }
  p {
    color: #434956;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 10px;
  }

  ul {
    li {
      position: relative;
      padding-left: 15px;
      margin-bottom: 10px;
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      a {
        color: #434956;
      }
      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: black;
      }
    }
  }
  /* 
  p {
    padding: 0px 0 20px 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  } */
`;
export const ShowAnswer = styled.div``;

export const QuestionNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const AddIcon = styled(FaPlus)`
  color: #a1a1a1;
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    font-size: calc(16px + (25 - 16) * (100vw - 390px) / (1440 - 390));
  }
`;
export const RemoveIcon = styled(FaMinus)`
  color: #28b781;
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    font-size: calc(16px + (25 - 16) * (100vw - 390px) / (1440 - 390));
  }
`;
