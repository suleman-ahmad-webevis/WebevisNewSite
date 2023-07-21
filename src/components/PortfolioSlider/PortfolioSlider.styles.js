import styled from "styled-components";

export const StyledPortfolioSlider = styled.div`
  max-width: 1440px;
  width: 95%;
  padding: 0 10px;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-horizontal > .swiper-pagination-horizontal .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    border-radius: 50%;
    border-top-left-radius: 50%;
    background-color: #28b781;
  }
  .swiper-pagination-bullet-active {
    width: 19px !important;
    border-radius: 26.122px !important;
    transition: 0.3s all ease-in-out;
  }
`;
export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 2.5rem;
  padding: 10px 30px;
  background: ${({ bgImage }) => `url(${bgImage.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 640px;
  height: 464px;
  margin: 0 auto 3rem auto;
  border-radius: 8px;
  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.25);
  .imageWrap {
    img {
      max-width: 100% !important;
      height: auto !important;
    }
  }

  @media screen and (max-width: 1440px) {
    width: calc(350px + (640 - 350) * (100vw - 390px) / (1440 - 390));
    height: calc(253.75px + (464 - 253.75) * (100vw - 390px) / (1440 - 390));
  }
`;
export const SliderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 10px;
  h3 {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: Outfit;
    font-weight: 600;
    text-transform: none;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-family: Outfit;
    font-weight: 500;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ImageWrapper = styled.div`
  max-width: 150px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;