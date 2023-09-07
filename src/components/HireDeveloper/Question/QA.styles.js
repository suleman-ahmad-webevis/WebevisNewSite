import styled from "styled-components";
import polygon from "../../../assets/images/Homemain/Polygon.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
  gap: 1rem;
  width: 100%;
`;
export const Number = styled.div`
  h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 39.7895px;
    line-height: 150%;
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
  width: 928px;
  @media screen and (max-width: 1440px) {
    width: calc(230px + (928 - 230) * (100vw - 390px) / (1440 - 390));
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ color }) => color};
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 22px 30px;
  margin-bottom: 30px;
  box-shadow: ${({ shadow }) => shadow};
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    padding: calc(16px + (22 - 16) * (100vw - 390px) / (1440 - 390))
      calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
  }
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;
export const Answer = styled.div`
  overflow-y: hidden;
  transition: 1s all ease-in-out;
  max-height: ${({ height }) => height};
  padding-top: ${({ paddingTop }) => paddingTop};
  .Answer-Heading {
    display: flex;
    align-items: center;
    gap: 4px;
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    h4 {
      font-size: 16px;
      font-weight: 500;
    }
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (16 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Detail = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #434956;
  margin-bottom: 10px;
  @media screen and (max-width: 1440px) {
    font-size: calc(14px + (16 - 14) * (100vw - 390px) / (1440 - 390));
  }
`;
export const ShowAnswer = styled.div`
  transition: 1s;
  transform: rotate(${({ rotate }) => rotate});
`;

export const QuestionNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const AddIcon = styled(IoIosArrowDown)`
  color: #a1a1a1;
  font-size: 25px;
  cursor: pointer;
  color: ${({ color }) => color};
  @media screen and (max-width: 1440px) {
    font-size: calc(16px + (25 - 16) * (100vw - 390px) / (1440 - 390));
  }
`;
