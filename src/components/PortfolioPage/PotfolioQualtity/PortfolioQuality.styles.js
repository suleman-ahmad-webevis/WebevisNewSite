import styled from "styled-components";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BsCode } from "react-icons/bs";
export const QualityHolder = styled.section`
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const MarqueHolder = styled.div`
  max-width: 533px;

  @media screen and (max-width: 1440px) {
    max-width: calc(338px + (533 - 338) * (100vw - 1440px) / (992 - 1440));
  }
  @media screen and (max-width: 768px) {
    max-width: calc(338px + (533 - 338) * (100vw - 390px) / (768 - 390));
  }
  .flex,
  .flex1,
  .flex2,
  .flex3 {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      gap: 30px;
    }
  }
  .flex1,
  .flex2,
  .flex3 {
    margin-bottom: 60px;
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
      img {
        max-width: 100px;
        height: auto;
      }
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
      img {
        max-width: 100px;
        height: auto;
        object-fit: contain;
      }
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
