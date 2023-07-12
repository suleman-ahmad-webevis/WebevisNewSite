import styled from "styled-components";
export const ExpertSliderWrapper = styled.div`
  max-width: 1440px;
  width: 95%;
  padding: 0 10px;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-slide .swiper-slide-active {
    width: 415.61px !important;
    height: 422.23px !important;
    margin-bottom: 2rem;
    @media screen and (max-width: 1440px) {
      width: calc(
        349.61px + (415.61 - 349.61) * (100vw - 390px) / (1440 - 390)
      );
      height: calc(
        387.91px + (422.23 - 387.91) * (100vw - 390px) / (1440 - 390)
      );
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 89px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    border-radius: 50%;
    border-top-left-radius: 50%;
    background-color: green;
  }
`;
export const ExpertSliderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgImage }) => `url(${bgImage.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 415.61px;
  height: 422.23px;
  margin: 0 auto 2rem auto;
  @media screen and (max-width: 1440px) {
    width: calc(349.61px + (415.61 - 349.61) * (100vw - 390px) / (1440 - 390));
    height: calc(387.91px + (422.23 - 387.91) * (100vw - 390px) / (1440 - 390));
  }
`;
