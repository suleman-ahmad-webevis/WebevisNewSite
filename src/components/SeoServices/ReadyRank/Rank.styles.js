import styled from "styled-components";
import Bg from "../../../assets/images/seoservices/RankBg.png";
import Link from "next/link";

export const RankWrapper = styled.div`
  width: 100%;
  margin: 5rem auto 0 auto;
  @media screen and (max-width: 800px) {
    margin: 9rem auto 0 auto;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: 0 auto;
  }
  .container {
    padding: 0 20px;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
`;
export const RankSec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 20px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: auto;
  }
`;
export const ReadyText = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 60%;
  @media screen and (max-width: 910px) {
    gap: 8px;
  }
  @media screen and (max-width: 992px) {
    align-items: center;
    width: 100%;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: normal;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: normal;
    }
    @media screen and (max-width: 992px) {
      text-align: center;
    }
  }
`;
export const Expertise = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Bg.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 3rem 0;
  border-radius: 20px;
  position: relative;
  .fix {
    display: none;
    @media screen and (max-width: 1199px) {
      display: block;
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .absolute {
    position: absolute;
    right: 0;
    top: -50px;
    @media screen and (max-width: 1363px) {
      top: 10px;
      right: 20px;
    }
    @media screen and (max-width: 1199px) {
      display: none;
    }
  }
`;
export const RankImg = styled.div`
  width: 40%;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }
`;
