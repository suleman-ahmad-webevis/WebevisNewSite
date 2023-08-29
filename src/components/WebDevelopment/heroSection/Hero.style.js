import styled from "styled-components";
import webImage from "../../../assets/images/Services/WebDevelopmentServices/webImage.png";
export const HeroSec = styled.div`
  background-image: url(${webImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  .container{
    display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  }
`;
export const HeroText = styled.div`


margin: 91px 0 91px 5px;
  h1 {
    color: #fff;
    max-width: 565px;
    font-size: 70px;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 30px;
  }
  p {
    color: #fff;
    max-width: 565px;
    margin: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 40px;
  }
`;
