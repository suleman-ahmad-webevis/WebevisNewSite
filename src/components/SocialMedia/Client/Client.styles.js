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
    animation: scroll 80s linear infinite;
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
