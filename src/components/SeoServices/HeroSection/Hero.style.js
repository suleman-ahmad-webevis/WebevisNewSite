import styled from "styled-components";
import mainBg from "../../../assets//images/seoservices/main-bg.png";
import responsivebg from "../../../assets//images/seoservices/responsivebg.png";
export const Wrapper = styled.div`
  /* max-width: 2400px; */
  margin: 0 auto 3rem auto;
`;

export const HeroMain = styled.div`
  max-width: 100%;
  margin: auto;
  /* height: 100vh; */
  padding: 0 30px;
  display: flex;
  gap: 3rem;
  /* align-items: center; */
  background: url(${mainBg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .img2 {
    display: none;
  }
  @media screen and (max-width: 970px) {
    background: #eaf7ee;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    flex-direction: column;
    .img1 {
      display: none;
    }
    .img2 {
      display: block;
    }
  }
  @media screen and (max-width: 486px) {
    /* width: 95%; */
    padding: 0 10px;
  }
`;
export const HeroText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem auto;
  @media screen and (max-width: 1050px) {
    width: 50%;
    margin: 4rem auto;
  }
  @media screen and (max-width: 970px) {
    width: 80%;
    text-align: center;
  }
  @media screen and (max-width: 762px) {
    width: 90%;
  }

  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(40px + (76 - 40) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Cta = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.5rem;
  width: 100%;
  margin: auto;
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
    @media screen and (max-width: 486px) {
      height: 40px;
      font-size: 14px;
    }
  }
  button {
    width: 100%;
    background: white;
    color: #a1a1a1;
    border-radius: 4px;
    border: none;
    font-family: "General Sans", "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    transition: 0.5ms ease-in-out;
    margin: 0;
    height: 50px;
    &:hover {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
      color: white;
    }
    @media screen and (max-width: 586px) {
      width: 80%;
      margin: auto;
    }
    @media screen and (max-width: 486px) {
      height: 40px;
      font-size: 14px;
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
