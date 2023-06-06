import styled from "styled-components";
import img1 from "../../../assets/images/Services/youtubeMarketting/back.png";
export const TransformSec = styled.section`
  background-image: url(${img1.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 20px;
  margin-top: 70px;
  position: relative;
  z-index: 0;
`;
export const TransformFlex = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: auto;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 658px) {
    width: 100%;
   
  }
`;
export const TransformText = styled.section`
  h1 {
    width: 540px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 57px;
    color: #ffffff;
    margin: auto;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      width: 100%;
    }
  }
  button {
    margin: auto;
    margin-top: 20px;
    width: 57%;
    padding: 10px 2px;
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
    border-radius: 8px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #1ccc97;
  }
  @media screen and (max-width: 768px) {
    button {
      width: 90%;
    }
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const TransformImage = styled.section`
  img {
    width: 100%;
    object-fit: contain;
    display: none;
    height: max-content;
  }
  @media screen and (max-width: 1024px) {
    img {
      display: block;
    position: relative;
    top: 50px;
    bottom: 0px;
    }
  }
  @media screen and (max-width: 658px) {
    img {
      position: relative;
     top: 130px;
    }
  }
`;
export const TransformPos = styled.section`
  position: absolute;
  top: -120px;
  right: 70px;
  z-index: 1;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 1096px) {
    right: 30px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
