import styled, { css, keyframes } from "styled-components";
import byDefault from "../../../../public/assets/images/Homemain/Section-bg.jpg";
import Design from "../../../../public/assets/images/Homemain/Design-bg.jpg";
import Customer from "../../../../public/assets/images/Homemain/Customer-bg.jpg";
import Fintech from "../../../../public/assets/images/Homemain/Fintech-bg.jpg";
import defualt from "../../../../public/assets/images/Homemain/default.jpg";
export const AgencyWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 150%;
    color: #424954;
    margin-bottom: 3rem;
    text-shadow: 0px 3px 3px rgba(40, 183, 129, 0.55);
    @media screen and (max-width: 1440px) {
      font-size: calc(23px + (50 - 23) * (100vw - 390px) / (1440 - 390));
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

export const AgencyMain = styled.div`
  /* background-image: url(${(props) => props.image.src}); */
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 550px;
  @media screen and (max-width: 1440px) {
    background-size: 100%
      calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
  }
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  &.class0 {
    background-image: url(${defualt.src});

    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation} 0.3s ease-in-out;
      `}
  }
  &.class1 {
    background-image: url(${Design.src});

    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation} 0.3s ease-in-out;
      `}
  }
  &.class2 {
    background-image: url(${byDefault.src});

    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation2} 0.3s ease-in-out;
      `}
  }
  &.class3 {
    background-image: url(${Fintech.src});
    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation3} 0.3s ease-in-out;
      `}
  }
  &.class4 {
    background-image: url(${Customer.src});

    ${({ animate }) =>
      animate &&
      css`
        animation: ${zoomInAnimation4} 0.3s ease-in-out;
      `}
  }
`;
export const Agencysection = styled.div`
  width: 25%;
  border-right: 1px solid rgb(153, 154, 154);
  height: 550px;
  @media screen and (max-width: 1440px) {
    height: calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
  }
  overflow: hidden;
  background: linear-gradient(
    182.26deg,
    rgba(43, 44, 47, 0) 63.38%,
    rgba(43, 44, 47, 0.92) 78.22%
  );

  .hover {
    background: rgb(43, 44, 47, 0.63);
    transform: translateY(0px);
    height: 550px;
    @media screen and (max-width: 1440px) {
      height: calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 980px) {
      transform: translateY(-30px);
    }
    .headerText {
      margin-top: 8rem;
      h3 {
        opacity: 1;
      }
    }
    .leftText {
      opacity: 1;
      transform: translateX(-0px);
    }
  }
`;
export const AngencyTranform = styled.div`
  padding: 0px 15px;
  transition: 0.7s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transform: translateY(430px);
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 1270px) {
    transform: translateY(410px);
  }
  @media screen and (max-width: 1150px) {
    transform: translateY(390px);
  }
  @media screen and (max-width: 1052px) {
    transform: translateY(360px);
  }
  @media screen and (max-width: 1052px) {
    transform: translateY(370px);
  }

  .headerText {
    display: flex;
    align-items: center;
    gap: 10px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 81px;
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media screen and (max-width: 1440px) {
        font-size: calc(
          20.46px + (60 - 20.46) * (100vw - 390px) / (1440 - 390)
        );
      }
    }
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      text-transform: capitalize;
      color: #ffffff;
      opacity: 0.61;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (32 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(
          20.16px + (40 - 20.16) * (100vw - 390px) / (1440 - 390)
        );
      }
    }
  }
  .leftText {
    transition: 1s all ease-in-out;
    transform: translateX(200px);
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (20 - 14) * (100vw - 390px) / (1440 - 390));
      }
    }
    h6 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-transform: uppercase;
      color: #fff;

      cursor: pointer;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (24 - 12) * (100vw - 390px) / (1440 - 390));
      }
      &:hover {
        background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
`;

// export const AgencyCounter = styled.div`
//   width: 80%;
//   background: #434956;
//   border-radius: 0px 0px 60px 60px;
//   height: calc(58.46px + (160 - 58.46) * (100vw - 390px) / (1440 - 390));
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   @media screen and (max-width: 971px) {
//     width: 100%;
//   }
//   @media screen and (max-width: 504px) {
//     border-radius: 0px 0px 21.9207px 21.9207px;
//   }
// `;
// export const CounterText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   h4 {

//     font-style: normal;
//     font-weight: 500;
//     font-size: 44px;
//     line-height: 150%;
//     color: #ffffff;
//     margin: 0;
//     display: flex;
//     @media screen and (max-width: 1440px) {
//       font-size: calc(16px + (44 - 16) * (100vw - 390px) / (1440 - 390));
//     }
//   }
//   p {
//     font-style: normal;
//     font-weight: 600;
//     font-size: 24px;
//     line-height: 150%;
//     color: #ffffff;
//     margin: 0;

//     @media screen and (max-width: 1440px) {
//       font-size: calc(12px + (24 - 12) * (100vw - 390px) / (1440 - 390));
//     }
//   }
// `;
