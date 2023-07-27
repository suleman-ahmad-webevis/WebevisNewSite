import styled from "styled-components";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BsCode } from "react-icons/bs";
export const QualityHolder = styled.section`
  padding-bottom: 100px;
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
    align-items: center;
    gap: 60px;
    @media screen and (max-width: 768px) {
      gap: 30px;
    }
  }
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }

  .marquee-content {
    display: flex;
    animation: marquee-animation 40s linear infinite;
    align-items: center;
    gap: 60px;
    @media screen and (max-width: 768px) {
      gap: 30px;
    }
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
    align-items: center;
    gap: 60px;
    @media screen and (max-width: 768px) {
      gap: 30px;
    }
  }
  @keyframes marque-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
