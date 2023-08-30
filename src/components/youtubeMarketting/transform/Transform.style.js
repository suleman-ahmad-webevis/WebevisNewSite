import styled from "styled-components";
import img1 from "../../../assets/images/Services/youtubeMarketting/back.png";
export const TransformSec = styled.section`
  background-image: url(${img1.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 30px;
  margin: 200px 0 100px 0;
  z-index: 0;
  .container {
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    margin: 50px 0 100px 0;
    padding: 30px 20px;
  }
`;
export const TransformFlex = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TransformText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    max-width: 540px;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 57px;
    color: #ffffff;
    margin: auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1024px) {
      line-height: normal;
    }
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  button {
    margin-top: 20px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
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
      top: 70px;
    }
  }
`;
export const TransformPos = styled.section`
  position: absolute;
  top: -170px;
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
