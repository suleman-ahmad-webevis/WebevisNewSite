import styled from "styled-components";
import polygon from "../../../assets/images/Homemain/Polygon.png";
import { FaPlus, FaMinus } from "react-icons/fa";

export const StyledQA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: space-between;
  border-bottom: 1px solid #28b781;
  padding: 10px 0;
`;
export const Number = styled.div`
  background: url(${polygon.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(50px + (90 - 50) * (100vw - 390px) / (1440 - 390));
  height: calc(50px + (90 - 50) * (100vw - 390px) / (1440 - 390));
  display: flex;
  align-items: center;
  justify-content: center;

  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 39.7895px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: ${({ color }) => color};
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (39.7895 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(268px + (928 - 268) * (100vw - 390px) / (1440 - 390));
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: ${({ color }) => color};
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Answer = styled.div`
  overflow-y: hidden;
  transition: 0.5s all ease-in-out;
  max-height: ${({ height }) => height};
  p {
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
  }
`;
export const ShowAnswer = styled.div``;

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
