import styled from "styled-components";
import background from "../../../../public/assets/images/ReactNative/background.png";
import responsive from "../../../../public/assets/images/ReactNative/responsive.png";

export const HeroSec = styled.div`
  background-image: url(${background.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 574px) {
    background-image: url(${responsive.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      br {
        display: none;
      }
    }
    @media screen and (max-width: 991px) {
     align-items: center;
    }
    @media screen and (max-width: 574px) {
      align-items: center;
      flex-direction: column;
    }
  }
  .hero_text {
    width: 50%;
    padding: 100px 0;
    @media screen and (max-width: 1199px) {
      padding: 56px 0;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
    }
    h1 {
      color: #fff;
      font-size: 70px;
      margin-bottom: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      @media screen and (max-width: 1199px) {
        font-size: 50px;
      }
      @media screen and (max-width: 991px) {
        font-size: 40px;
      }
      @media screen and (max-width: 767px) {
        font-size: 32px;
      }
    }
    p {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */
      margin-bottom: 40px;
      text-transform: capitalize;
      @media screen and (max-width: 1199px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
  .hero_image {
    width: 40%;
    padding: 40px 0;
    @media screen and (max-width: 574px) {
      width: 100%;
      padding: 20px 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
