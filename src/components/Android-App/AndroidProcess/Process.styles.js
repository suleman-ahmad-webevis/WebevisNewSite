import styled, { css } from "styled-components";
import ColBefore from "../../../../public/assets/images/Android-App/Process-before.png";
export const ProcessHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const ProcessContent = styled.div`
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    font-style: normal;
    max-width: 1220px;
    margin: 0 auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(28px + (32 - 24) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Col-holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 105px;
    padding-top: 60px;
    position: relative;
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 60px;
      column-gap: 0;
    }
    &::before {
      content: "";
      position: absolute;
      top: 55%;
      left: 0;
      right: 0;
      height: 5px;
      background-color: #28b781;
      border-radius: 65px;
      z-index: -1;
      @media screen and (max-width: 1300px) {
        top: 58%;
      }
      @media screen and (max-width: 991px) {
        top: 61%;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
  }
`;
export const Col = styled.div`
  max-width: 450px;
  padding: 20px 28px 38px 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  background-color: #fff;
  /* @media screen and (max-width: 1440px) {
    padding: calc(16px + (20 - 16) * (100vw - 768px) / (1440 - 768));
  } */
  @media screen and (max-width: 767px) {
    width: 350px;
    margin: 0 auto;
  }
  ${(props) =>
    props.addBefore == true &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 46%;
        top: 98%;
        width: 20px;
        height: 113px;
        background-image: url(${ColBefore.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    `}
  ${(props) =>
    props.addMobileBefore == true &&
    css`
      &::after {
        content: "";
        position: absolute;
        left: 46%;
        top: 86%;
        width: 20px;
        height: 113px;
        background-image: url(${ColBefore.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        @media screen and (min-width: 768px) {
          display: none;
        }
      }
    `}
  ul {
    color: #898989;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    padding-left: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (22 - 20) * (100vw - 390px) / (1440 - 390));
    }

    li {
      margin-bottom: 15px;
      position: relative;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(10px + (15 - 10) * (100vw - 390px) / (1440 - 390));
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        top: 4px;
        left: -23px;
        width: 14px;
        height: 14px;
        background: #d1d3d4;
        border-radius: 100%;
      }
    }
  }
`;
