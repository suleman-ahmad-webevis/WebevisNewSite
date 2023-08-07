import styled from "styled-components";
import mainBg from "../../../assets//images/seoservices/seoMain.png";
import responsivebg from "../../../assets//images/seoservices/seorespbg.jpg";
export const Wrapper = styled.div`
  /* margin: 0 auto; */
`;

export const HeroMain = styled.div`
  height: 100vh;
  background: url(${mainBg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background: url(${responsivebg.src});
    background-size: 100% 100%;

    /* height: 110vh; */
  }
`;
export const HeroText = styled.div`
  width: 100%;
  margin-left: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  h1 {
    margin-bottom: 20px;
    max-width: 600px;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #fff;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: normal;
    }
  }
  p {
    max-width: 600px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 992px) {
    justify-content: center;
    text-align: center;
    h1,
    p {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding-top: 80px;
  }
`;
export const Cta = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  @media screen and (max-width: 586px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 486px) {
    grid-gap: 10px;
  }

  input {
    /* width: 100%; */
    height: 50px;
    padding: 0 10px;
    font-family: "General Sans", "outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #a1a1a1;
    border: none;
    outline: none;
    border-radius: 4px;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    @media screen and (max-width: 486px) {
      height: 40px;
      font-size: 14px;
      width: 100%;
    }
  }
`;
export const HeroImg = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width: 1050px) {
    width: 50%;
    margin: 0 auto;
  }
  img {
    display: inline-block;
    /* vertical-align: bottom; */
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 970px) {
    width: 80%;
  }
  @media screen and (max-width: 762px) {
    width: 100%;
  }
`;
