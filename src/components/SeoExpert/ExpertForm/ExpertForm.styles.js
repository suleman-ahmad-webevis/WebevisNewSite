import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Expert-Bg.png";
export const ExpertHolder = styled.section`
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
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
      }
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
    column-gap: 40px;
    row-gap: 30px;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr;
    }
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
