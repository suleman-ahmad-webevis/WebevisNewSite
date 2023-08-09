import back from "../../semservices/assests/card.png";
import styled from "styled-components";
export const MarketHeading = styled.section`
  display: flex;
  flex-direction: column;

  h5 {
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 60px;
    font-size: 45px;
    color: #424954;
  }
  @media screen and (max-width: 658px) {
    h5 {
      font-size: calc(32px + (45 - 32) * (100vw - 390px) / (1440 - 390));
      margin-bottom:20px;

    }
    
  }

`;
export const MarketFlex = styled.section`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 14.86434px;
  background-image: url(${back.src}),
    linear-gradient(
      110.26deg,
      rgba(12, 145, 204, 0.82) -1.17%,
      rgba(2, 185, 128, 0.87) 60.57%
    );
  background-size: cover;
  background-position: center;
  padding:  10px 60px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  padding:  10px 30px;
  }
  @media screen and (max-width: 658px) {
    flex-wrap: wrap;
  padding:  10px 10px;
  }
`;
export const MarketInside = styled.section`
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 150%;
    margin: 0;
    color: #ffffff;
  }
  p {
    margin: 0;
    font-family: "GT Haptik";
    font-style: normal;
    text-align: center;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 658px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 22px;
    }
  }
`;
export const SemSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width:658px){
    padding:0px 10px;
  }
`;
export const SemFlex = styled.section`
  text-align: center;
  margin-top: 70px;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    color: #424954;
    margin-bottom:20px;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #2b2c2f;
  }
  img {
    width: 900px;
    height: 500px;
    max-width: 100%;
    min-height: 100%;
    margin: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 658px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
    img {
      max-width: 90%;
      margin-top: -167px;
      margin-bottom: -150px;
    }
  }
`;
