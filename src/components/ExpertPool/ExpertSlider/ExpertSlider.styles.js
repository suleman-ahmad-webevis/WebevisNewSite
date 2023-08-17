import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const StyledExpertSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  padding: 20px;
  max-width: 1440px;
  margin: 0 auto;
  /* padding: 0 20px; */
  @media screen and (max-width: 1440px) {
    margin-top: calc(50px + (96 - 50) * (100vw - 390px) / (1440 - 390));
  }
  h3 {
    /* margin: 0; */
    color: #424954;
    font-size: 45px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const SliderWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1440px) {
    margin-top: calc(
      10.15px + (70.22 - 10.15) * (100vw - 390px) / (1440 - 390)
    );
  }

  .Link {
    display: flex !important;
    width: 100% !important;
    margin: 0 auto;
  }
  .slick-slide {
    /* width: 100% !important;
    margin: 0 auto; */
  }
  .slick-slider {
    display: flex;
  }
  .slick-list {
    display: flex;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    @media screen and (max-width: 574px) {
      padding: 20px 10px;
    }
    div {
      display: flex;
      width: 100%;
    }
  }
  .slick-dots {
    display: none !important;
  }
`;
export const SliderMain = styled.div`
  width: 315.33px;
  margin: 0 auto;
  border-radius: 10.44px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;
  &:hover {
    z-index: 1;
  }
  @media screen and (max-width: 1440px) {
    width: calc(277px + (315.33 - 277) * (100vw - 390px) / (1440 - 390));
  }
  h5 {
    font-size: 28.473px;
    font-family: Outfit;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  h6 {
    margin-top: 1rem;
    color: #434956;
    font-size: 17.084px;
    font-family: Outfit;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (17.084 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const SliderDiscreption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 27px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p {
      color: #434956;
      text-align: center;
      font-size: 13.288px;
      font-family: Outfit;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (13.288 - 12) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const Icon = styled(FaCheck)`
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
export const Pricing = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 14px;
  gap: 10px;
  strong {
    color: #434956;
    text-align: center;
    font-family: Outfit;
    font-size: 22.779px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
  p {
    color: #434956;
    text-align: center;
    font-family: Outfit;
    font-size: 22.779px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    @media screen and (max-width: 1440px) {
      font-size: calc(
        20.01px + (22.779 - 20.01) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
`;
