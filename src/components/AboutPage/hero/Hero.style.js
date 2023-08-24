import styled from "styled-components";
import img1 from "../../../assets/images/AboutUs/Aboutbg.png";
import resp from "../../../assets/images/AboutUs/bgrep.png";
export const AboutSec = styled.section`
  background-image: url(${img1.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  /* @media screen and (max-width: 810px) {
    background-image: url(${resp.src});
    background-size: cover;
    height: 712px;
  } */
  @media screen and (max-width: 810px) {
    background: rgb(255, 247, 244);
    background-size: cover;
  }
`;
export const AboutText = styled.div`
  width: 50%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 20px;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    width: 55%;
  }
  @media screen and (max-width: 810px) {
    width: 100%;
    padding: 0 20px;
  }
  h1 {
    color: #434956;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const AboutWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 830px) {
    padding: 50px 20px;
  }
  @media screen and (max-width: 810px) {
    flex-direction: column;
    padding: 50px 0px 0px 0px;
    gap: 3rem;
  }
`;
export const AboutImage = styled.div`
  display: none;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 810px) {
    display: flex;
  }
  .laptop {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
`;