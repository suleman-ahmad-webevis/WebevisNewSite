import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Expert-Bg.png";
export const ExpertHolder = styled.section`
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  p {
    color: #a1a1a1;
  }
`;
export const Expert = styled.div`
  .Seo {
    text-align: center;
    margin-bottom: 40px;
    h2 {
      color: #fff;
      font-size: 45px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        font-size: calc(25px + (45 - 25) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 767px) {
        text-align: start;
        margin-bottom: 20px;
      }
    }
    @media screen and (max-width: 767px) {
      text-align: start;
    }
    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .Grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 30px;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr;
      padding-left: 20px;
    }
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 10px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
    .Col {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #28b781;
        top: 10px;
        left: -22px;
        border-radius: 100%;
      }
    }
  }
`;
