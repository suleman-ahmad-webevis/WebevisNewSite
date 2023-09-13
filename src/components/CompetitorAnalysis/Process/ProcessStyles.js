import styled from "styled-components";
import Image from "next/image";

export const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #424954;
  }
`;

export const ProcessCards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 16%;
  @media screen and (max-width: 768px) {
    width: ${({ width }) => (width ? width : "16%")};
  }

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 900px) {
    /* width:; */
  }
`;
export const ResponsiveImageWH = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
    object-fit: contain;
    height: max-content;
  }
`;