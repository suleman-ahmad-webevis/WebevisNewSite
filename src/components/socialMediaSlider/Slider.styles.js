import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  padding: 30px 0;
  margin: 10px 0;
  .sliderImage {
    display: none;
  }
  .slick-slider {
    max-width: 100%;
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
    gap: 10px;

    /* width: calc(150px * 12); */
    animation: scroll 40s linear infinite;
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
export const SliderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SliderImage = styled(Image)`
  width: 139px !important;
  height: 139px !important;
  object-fit: contain;

  @media screen and (max-width: 1440px) {
    width: calc(82px + (139 - 82) * (100vw - 390px) / (1440 - 390)) !important;
    height: calc(82px + (139 - 82) * (100vw - 390px) / (1440 - 390)) !important;
  }
`;
