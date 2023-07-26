import styled from "styled-components";
export const ExpertSliderWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 10px;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-slide .swiper-slide-active {
    /* width: 415.61px !important; */
    /* height: 422.23px !important; */
    margin-bottom: 2rem;
    /* @media screen and (max-width: 1440px) {
      width: calc(
        349.61px + (415.61 - 349.61) * (100vw - 390px) / (1440 - 390)
      );
      height: calc(
        387.91px + (422.23 - 387.91) * (100vw - 390px) / (1440 - 390)
      );
    } */
  }

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
export const ExpertSliderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
