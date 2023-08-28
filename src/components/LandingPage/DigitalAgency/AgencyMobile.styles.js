import styled, { css, keyframes } from "styled-components";

import Default from "../../../assets/images/Designation/default.jpg";
import byDefault from "../../../assets/images/Designation/Section-bg.jpg";
import Design from "../../../assets/images/Designation/Design-bg.jpg";
import Customer from "../../../assets/images/Designation/Customer-bg.jpg";
import Fintech from "../../../assets/images/Designation/Fintech-bg.jpg";
import defaultResp from "../../../assets/images/Designation/defaultresp.jpg";
import appResp from "../../../assets/images/Designation/appRes.jpg";
import webresp from "../../../assets/images/Designation/WebResp.jpg";
import digitalresp from "../../../assets/images/Designation/digitalResp.jpg";
import csrResp from "../../../assets/images/Designation/csrResp.jpg";
export const AgencyMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 150%;
    color: #424954;
    margin-bottom: 3rem;
    transition: 0.5 all ease-in-out;
    text-shadow: 0px 3px 3px rgba(40, 183, 129, 0.55);
    @media screen and (max-width: 1440px) {
      font-size: calc(23px + (50 - 23) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 576px) {
      margin: 10px 0 1.5rem 0;
    }
  }
`;
const zoomInAnimation = keyframes`
  0% {
   background-size: 110% 121.1%;

  }
 
  
  100% {
       background-size: 100% 100%;
  }
`;
const zoomInAnimation2 = keyframes`
   0% {
   background-size: 110% 121%;

  }
 
  
  100% {
   background-size: 100% 100%;
  }
`;
const zoomInAnimation3 = keyframes`
  0% {
  background-size: 110% 121.2%;

  }
 
  
  100% {
       background-size: 100% 100%;
  }
`;
const zoomInAnimation4 = keyframes`
   0% {
      background-size: 110% 121.4%;

  }
 
  
  100% {
       background-size: 100% 100%;
  }
`;
export const AgencyImageSection = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 700px;
  @media screen and (max-width: 1440px) {
    height: calc(646px + (700 - 646) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 389px) {
    width: calc(290px + (349 - 290) * (100vw - 290px) / (390 - 290));
  }
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  .hover {
    background: rgb(43, 44, 47, 0.63);
    transform: translateX(0%);
    .headerText {
      opacity: 0;
      display: none;
    }
    .leftText {
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
      width: 100%;
      margin: 0 auto;
      /* @media screen and (max-width: 779px) {
        transform: translateY(-5%);
        gap: 1rem;
      } */
    }
  }
  &.class0 {
    background-image: url(${Default.src});
    @media screen and (max-width: 500px) {
      background-image: url(${defaultResp.src});
    }
    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation} 0.5s ease-in-out;
      `}
  }
  &.class1 {
    background-image: url(${Design.src});
    @media screen and (max-width: 500px) {
      background-image: url(${webresp.src});
    }
    ${({ animate }) =>
      animate &&
      css`
        /* animation: ${zoomInAnimation} 0.5s ease-in-out; */
      `}
  }
  &.class2 {
    background-image: url(${byDefault.src});
    @media screen and (max-width: 500px) {
      background-image: url(${appResp.src});
    }
    ${({ animate }) =>
      animate &&
      css`
        /* animation: ${zoomInAnimation2} 0.5s ease-in-out; */
      `}
  }
  &.class3 {
    background-image: url(${Fintech.src});
    @media screen and (max-width: 500px) {
      background-image: url(${digitalresp.src});
    }
    ${({ animate }) =>
      animate &&
      css`
        /* animation: ${zoomInAnimation3} 0.5s ease-in-out; */
      `}
  }
  &.class4 {
    background-image: url(${Customer.src});
    @media screen and (max-width: 500px) {
      background-image: url(${csrResp.src});
    }
    ${({ animate }) =>
      animate &&
      css`
        /* animation: ${zoomInAnimation4} 0.5s ease-in-out; */
      `}
  }
`;
export const AgencyHoverSection = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(153, 154, 154);
  overflow: hidden;
  height: 175px;
  @media screen and (max-width: 1440px) {
    height: calc(161.5px + (175 - 161.5) * (100vw - 390px) / (1440 - 390));
  }
  background: linear-gradient(
    290.26deg,
    rgba(43, 44, 47, 0) 63.38%,
    rgba(43, 44, 47, 0.92) 78.22%
  );
`;
export const AgencyTransform = styled.div`
  padding: 0 5px;
  transition: 0.7s;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  transform: translateX(${({ trans }) => (trans ? trans : "-40%")});
  transition: 0.5s all ease-in-out;
  height: 110px;
  @media screen and (max-width: 1440px) {
    height: calc(161.5px + (175 - 161.5) * (100vw - 390px) / (1440 - 390));
  }
  /* @media screen and (max-width: 779px) {
    transform: translateX(${({ trans1 }) => (trans1 ? trans1 : "-50%")});
  }
  @media screen and (max-width: 628px) {
    transform: translateX(${({ trans2 }) => (trans2 ? trans2 : "-55%")});
  }

  @media screen and (max-width: 490px) {
    transform: translateX(${({ trans4 }) => (trans4 ? trans4 : "-51%")});
  }
  @media screen and (max-width: 438px) {
    transform: translateX(${({ trans5 }) => (trans5 ? trans5 : "-51%")});
  } */
  @media screen and (max-width: 420px) {
    transform: translateX(${({ trans1 }) => trans1 && trans1});
  }
  .headerText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 81px;
      color: #28b781;
      margin: 0;
      height: max-content;

      @media screen and (max-width: 1440px) {
        font-size: calc(24px + (60 - 24) * (100vw - 390px) / (1440 - 390));
        line-height: calc(30px + (81 - 30) * (100vw - 390px) / (1440 - 390));
      }
    }
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.61;
      margin: 0;

      @media screen and (max-width: 1440px) {
        font-size: calc(24px + (32 - 24) * (100vw - 390px) / (1440 - 390));
        line-height: normal;
      }
    }
  }
  .leftText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    transition: 1s all ease-in-out;
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      text-align: center;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (20 - 12) * (100vw - 390px) / (1440 - 390));
        line-height: calc(19px + (25 - 19) * (100vw - 390px) / (1440 - 390));
      }
    }
    h6 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
      margin: 0;
      @media screen and (max-width: 1440px) {
        font-size: calc(8px + (24 - 10) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
