import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/youtubeMarketting/HeroBG.png";
export const HeroSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-image: url(${HeroBG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10rem 0px;
  margin-bottom: 50px;
  @media screen and (max-width: 1224px) {
    padding: 10rem 5rem;
  }
  @media screen and (max-width: 1100px) {
    padding: 10rem 10rem;
  }
  @media screen and (max-width: 1024px) {
    background-image: none;
    padding: 100px 0px;
    flex-direction: column;
  }
`;
export const HeroText = styled.div`
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  h1 {
    width: 532px;
    margin: auto;
    margin-top: -120px;
    margin-left: 30px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #434956;
  }
  p {
    width: 660px;
    margin: auto;
    margin-left: 30px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #434956;
  }
  @media screen and (max-width: 1180px) {
    h1 {
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const HeroImages = styled.section`
  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
    display: none;
    margin: auto;
  }
  @media screen and (max-width: 1024px) {
    img {
      display: block;
      position: relative;
      left: 0px;
    }
  }
  @media screen and (max-width: 548px) {
    img {
      position: relative;
      top: 20px;
      left: 0px;
    }
  }
`;
export const Btn = styled.section`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-left: 30px;

  @media screen and (max-width: 548px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;
export const Button = styled.button`
  width: ${({ Width }) => (Width ? Width : "")};
  border: ${({ Border }) => (Border ? Border : "")};
  background: ${({ Bg }) => (Bg ? Bg : "transparent")};
  font-family: "OutFit";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  padding: 10px 0px;
  color: ${({ Color }) => (Color ? Color : "white")};
  text-align: center;
  border-radius: 40px;
  @media screen and (max-width: 548px) {
    width: ${({ Responsive }) => (Responsive ? Responsive : "70%")};
  }
  @media screen and (max-width: 1440px) {
    font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
  }
`;
