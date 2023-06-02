import styled from "styled-components";
import Background from "../../../assets//images/Services/youtubeMarketting/Background.png";

export const HeroSec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroText = styled.div`
  width: 50%;
  margin: auto 10px;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #434956;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #434956;
  }
`;
export const HeroImage = styled.div`
  width: 60%;
  margin: auto 10px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
export const Button = styled.button`
border: none;
  background-image: url(${Background.src});
  background-position: center;
  background-repeat: no-repeat;
  font-family: "General Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  gap: 20px;
 
`;
