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
  flex-grow: 1;
  @media screen and (max-width: 1440px) {
    max-width: calc(450px + (615 - 450) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 992px) {
    max-width: 615px;
  }
  h2 {
    color: #434956;
    font-size: 30px;
    font-weight: 600;
    max-width: 500px;
    margin-bottom: 10px;
    @media screen and (max-width: 1440px) {
      font-size: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
    @media screen and (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .main-text {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      h3 {
        color: #434956;
        font-size: 16px;
        font-weight: 500;
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
  }
`;
export const Dollar = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ bg }) => (bg ? bg : "")};
  flex-shrink: 0;
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
  max-width: 633px;
  margin-right: 20px;
  @media screen and (max-width: 1440px) {
    max-width: calc(450px + (633 - 450) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 991px) {
    max-width: 633px;
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
  /* .container1 {
    margin-left: 30px;
  } */
  .container2 {
    margin-left: 20px;
  }
  /* .container3 {
    margin:0 10px;
  } */
  .container4 {
    margin-left: 20px;
  }
  /* .container5 {
    margin:0 10px;
  } */
  .container6 {
    margin: 0 20px;
  }
  /* .container7 {
    margin:0 10px;
  } */

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
