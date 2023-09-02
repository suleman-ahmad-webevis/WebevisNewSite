import styled from "styled-components";
import Image from "next/image";

export const SliderContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
export const Trust = styled.div`
  background: ${({ bg }) => (bg ? bg : "#eaf7ee")};
  /* padding: 10px 0; */
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  box-shadow: ${({ shadow }) =>
    shadow ? " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "none"};
  @media screen and (max-width: 870px) {
    padding: 10px 0;
    margin: 0px 0;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    color: #424954;
    margin-bottom: 55px;
    @media screen and (min-width: 768px) {
    }
  }

  .slick-slider {
    width: 100%;
  }
  .carousel-slider {
    transition: transform 1s ease-in-out;
  }

  .carousel-slider.playing {
    transition: none;
  }
  .slick-track {
    display: flex;
    align-items: center;
    gap: 70px;
    /* width: calc(150px * 12); */
    animation: scroll 100s linear infinite;
    @media screen and (max-width: 1440px) {
      gap: calc(30px + (70 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }

  @keyframes scroll {
    0% {
      /* transform: translateX(0); */
      transform: ${({ ti }) => (ti ? ti : "translateX(0px)")};
    }
    100% {
      /* transform: translateX(-1200px); */
      transform: ${({ tf }) => (tf ? tf : "translateX(-3200px)")};
    }
  }
`;
export const SliderWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;
export const SliderImage = styled(Image)`
  max-width: 100%;
  height: auto;
  /* object-fit: contain; */
`;
export const MarqueHolder = styled.div`
  max-width: 1920px;
  /* @media screen and (max-width: 1440px) {
    max-width: calc(450px + (633 - 450) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 991px) {
    max-width: 633px;
  }
  @media screen and (max-width: 768px) {
    max-width: calc(338px + (533 - 338) * (100vw - 390px) / (768 - 390));
  } */
  .flex {
    display: flex;
  }
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }
  .marquee-contents {
    display: flex;
    animation: marque-animation 50s linear infinite;
    margin: 0 50px;
    img {
      width: 610px;
      height: 70px;
    }
  }
  @keyframes marque-animation {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
