import styled from "styled-components";
import Bg from "../../../assets/images/Services/backgroundHero.png";

export const MainSection = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${Bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 25px 40px 0 40px;
  @media screen and (max-width: 751px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;
export const HeroText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media screen and (max-width: 1020px) {
    margin-bottom: 2rem;
    width: 45%;
  }
  @media screen and (max-width: 1020px) {
    width: 45%;
    margin: auto;
  }
  @media screen and (max-width: 751px) {
    width: 95%;
    align-items: center;
  }
  @media screen and (max-width: 513px) {
    width: 100%;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 88px;
    color: #ffffff;
    @media screen and (max-width: 952px) {
      font-size: 50px;
    }
    @media screen and (max-width: 751px) {
      font-size: 35px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28.0778px;
    line-height: 35px;
    color: #ffffff;
    @media screen and (max-width: 1170px) {
      font-size: 22.0778px;
    }
    @media screen and (max-width: 952px) {
      font-size: 18px;
    }
    @media screen and (max-width: 513px) {
      font-size: 16px;
      line-height: 25px;
    }
  }
`;
export const HeroImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1020px) {
    width: 45%;
    margin: auto;
    align-items: flex-end;
    justify-content: flex-end;
    @media screen and (max-width: 751px) {
      width: 80%;
      align-items: center;
    }
    @media screen and (max-width: 513px) {
      width: 100%;
    }
  }
  img {
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    height: auto;
    cursor: pointer;
    @media screen and (max-width: 1020px) {
      height: 433px;
    }
    @media screen and (max-width: 500px) {
      height: 353px;
    }
    @media screen and (max-width: 380px) {
      height: 290px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
