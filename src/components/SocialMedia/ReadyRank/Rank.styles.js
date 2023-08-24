import styled from "styled-components";
import Bg from "../../../assets/images/SocialMedia/Background.png";
import Link from "next/link";

export const RankWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    /* margin: 9rem auto 0 auto; */
  }
`;
export const RankSec = styled.div`
  width: 90%;
  margin: 3rem auto;
  background: url(${Bg.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin: auto;
  }
`;
export const ReadyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 60%;
  @media screen and (max-width: 910px) {
    gap: 8px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 53.186px;
    line-height: 71px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (53.186 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(35px + (71 - 35) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const Button = styled(Link)`
  border-radius: 27px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  background-color: white;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
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
  right: -10%;

  @media screen and (max-width: 768px) {
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
