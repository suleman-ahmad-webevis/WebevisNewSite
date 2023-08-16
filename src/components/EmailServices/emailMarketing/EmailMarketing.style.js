import styled from "styled-components";
import email from "../../EmailServices/assests/emailback.png";
export const MarketGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  /* @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  } */
  .our_email {
    color: #424954;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
  }
`;
export const GridDiv = styled.section`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  width: 249px;
  height: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  img {
    object-fit: contain;
    width: 51px;
    height: 55.11px;
  }
  h1 {
    width: 154px;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  :nth-child(1) {
    background-image: url(${email.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      color: white;
    }
    img {
      fill: #ffffff;
    }
  }
  /* :nth-child(6) {
    h1 {
      width: 207px;
    }
  } */
`;
