import styled from "styled-components";
import Image from "next/image";

export const Trust = styled.div`
  background: #eaf7ee;
  padding: 30px 0;
  margin: 2rem 0;
  @media screen and (max-width: 870px) {
    padding: 15px 0;
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
    animation: scroll 20s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1200px);
    }
  }
`;
export const SliderImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
`;
