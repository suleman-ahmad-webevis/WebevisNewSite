import styled from "styled-components";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BsCode } from "react-icons/bs";
export const QualityHolder = styled.section`
  padding-bottom: 100px;
`;
export const Qualty = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Price = styled.div`
  max-width: 615px;
  @media screen and (max-width: 1440px) {
    max-width: calc(364px + (615 - 364) * (100vw - 1440px) / (992 - 1440));
  }
  @media screen and (max-width: 992px) {
    max-width: 615px;
  }
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 600;
    max-width: 500px;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Text {
    display: flex;
    gap: 15px;
    align-items: start;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    h3 {
      color: #434956;
      font-size: 26px;
      margin-bottom: 20px;
    }
    p {
      color: #434956;
      font-size: 25px;
      font-weight: 400;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (25 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const Dollar = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background-color: ${({ bg }) => (bg ? bg : "")};
`;
export const DollarIcon = styled(LiaDollarSignSolid)`
  width: 44px;
  height: fit-content;
  color: #fff;
`;
export const CodeIcon = styled(BsCode)`
  width: 44px;
  height: fit-content;
  color: #fff;
`;
export const MarqueHolder = styled.div`
  max-width: 533px;
  @media screen and (max-width: 1440px) {
    max-width: calc(338px + (533 - 338) * (100vw - 1440px) / (992 - 1440));
  }
  @media screen and (max-width: 768px) {
    max-width: calc(338px + (533 - 338) * (100vw - 390px) / (768 - 390));
  }
  .flex {
    display: flex;
  }
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }

  .marquee-content {
    display: flex;
    animation: marquee-animation 40s linear infinite;
  }

  @keyframes marquee-animation {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .marquee-contents {
    display: flex;
    animation: marque-animation 40s linear infinite;
  }
  @keyframes marque-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
