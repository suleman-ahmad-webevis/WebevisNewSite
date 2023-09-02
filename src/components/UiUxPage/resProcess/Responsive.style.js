import styled from "styled-components";
import line from "../../../../public/assets/images/uiPage/line.png";
export const ResSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  .main_res {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    h2 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      @media screen and (max-width: 1290px) {
        font-size: 35px;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
        margin-bottom: 20px;
        br {
          display: none;
        }
      }
    }

    .circle {
      fill: #fff;
      background-color: white;
      filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin-bottom: 30px;
      h5 {
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
        text-transform: lowercase;
        background: var(
          --Linear,
          linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media screen and (max-width: 767px) {
          font-size: 25px;
        }
        @media screen and (max-width: 574px) {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 574px) {
        width: 51px;
        height: 51px;
      }
      @media screen and (max-width: 480px) {
        width: 70px;
      }
    }
    .res {
      display: flex;
      gap: 31px;
      margin-bottom: 80px;
      /* margin-top: 50px; */
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 100px;
        left: 35px;
        background-image: url(${line.src});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 200px;
        width: 30px;
        @media screen and (max-width: 564px) {
          position: absolute;
          z-index: -13;
          top: 50px;
          left: 10px;
          height: 224px;
          width: 30px;
        }
      }
    }
    .res:nth-child(4)::after {
      background-image: none;
      display: none;
    }
    .text {
      display: flex;
      flex-direction: column;
      h3 {
        color: #434956;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
        text-transform: capitalize;
        @media screen and (max-width: 574px) {
          font-size: 24px;
        }
      }
      p {
        color: #434956;
        font-size: 18px;
        font-style: normal;
        max-width: 446px;
        font-weight: 400;
        line-height: 150%; /* 27px */
      }
    }
  }
  .res_image {
    img {
      width: 100%;
      @media screen and (max-width: 767px) {
        height: auto;
      }
    }
  }
`;
