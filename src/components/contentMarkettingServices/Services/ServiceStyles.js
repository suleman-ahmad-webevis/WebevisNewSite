import styled from "styled-components";

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 20px;

h4{
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #28B781;
    text-align: center;
  }
h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
   }
h3{
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h4{ font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1440 - 320)); }
    h2{ font-size: calc(24px + (45 - 24) * (100vw - 320px) / (1440 - 320)); }
    h3{ font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320)); }
  }
`;

export const ServicesCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 20px;
column-gap: 130px;
margin-top: 30px;
  @media screen and (max-width: 1440px) {
    column-gap: calc(36px + (130 - 36) * (100vw - 320px) / (1440 - 320)); 
  }
  @media screen and (max-width: 760px) {
      grid-template-columns: 1fr 1fr;
  }
`;

export const ServiceCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
gap: 10px;

img{ height: 100px; }

h2{
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #2B2C2F;
    text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h2{ font-size: calc(14px + (28 - 14) * (100vw - 320px) / (1440 - 320)); }
  }
  @media screen and (max-width: 760px) {
    img{ height: 70px; width: 70px;}
  }
`;