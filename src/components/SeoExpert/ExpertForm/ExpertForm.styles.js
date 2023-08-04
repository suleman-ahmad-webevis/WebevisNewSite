import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Expert-Bg.png";
export const ExpertHolder = styled.section`
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 40px;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  p {
    color: #a1a1a1;
  }
`;
export const Expert = styled.div`
  .Seo {
    text-align: center;
    margin-bottom: 50px;
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
    h2 {
      color: #fff;
      font-size: 45px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .Grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-columns: 1fr; */
    row-gap: 50px;
    column-gap: 50px;
    @media screen and (max-width: 1199px) {
      row-gap: 40px;
      column-gap: 40px;
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      column-gap: 30px;
    }
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
    .Col {
      max-width: 403px;
      position: relative;
      @media screen and (max-width: 1440px) {
        /* max-width: calc(350px + (403 - 350) * (100vw - 390px) / (1440 - 390)); */
      }
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        top: 10px;
        left: -24px;
        background-color: #28b781;
        border-radius: 100%;
      }
    }
  }
`;
