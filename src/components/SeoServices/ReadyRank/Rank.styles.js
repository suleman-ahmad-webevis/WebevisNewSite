import styled from "styled-components";
import Bg from "../../../assets/images/seoservices/RankBg.png";
import Link from "next/link";

export const RankWrapper = styled.div`
  width: 90%;
  margin: auto;
  @media screen and (max-width: 800px) {
    margin: 9rem auto 0 auto;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    /* margin: 2rem auto; */
  }
`;
export const RankSec = styled.div`
  width: 90%;
  margin: 3rem 0;
  background: url(${Bg.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 40px 20px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 80%;
    margin: auto;
  }
`;
export const ReadyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 55%;
  @media screen and (max-width: 910px) {
    gap: 8px;
  }
  @media screen and (max-width: 750px) {
    align-items: center;
    width: 80%;
  }

  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 53.186px;
    line-height: 71px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 48px;
      line-height: 60px;
    }
    @media screen and (max-width: 910px) {
      font-size: 35px;
    }
    @media screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    margin-left: 5rem;
    @media screen and (max-width: 1400px) {
      font-size: 22px;
      line-height: 30px;
    }
    @media screen and (max-width: 910px) {
      font-size: 18px;
      margin-left: 1rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 16px;
      line-height: 25px;
    }
    @media screen and (max-width: 750px) {
      margin-left: 0;
      text-align: center;
    }
  }
`;
export const Button = styled(Link)`
  margin-top: 2rem;
  border-radius: 27px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin-left: 5rem;
  background-color: white;
  @media screen and (max-width: 910px) {
    margin-left: 1rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 750px) {
    margin-left: 0;
  }

  h2 {
    font-family: "General Sans", "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(94.83deg, #36a7cf 9.78%, #23c290 93.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media screen and (max-width: 450px) {
      font-size: 18px;
    }
  }
`;
export const RankImg = styled.div`
  width: 40%;
  position: relative;
  right: -14%;

  @media screen and (max-width: 750px) {
    top: 80px;
    text-align: center;
    right: 0;
    width: 95%;
    margin: auto;
  }
  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
`;
