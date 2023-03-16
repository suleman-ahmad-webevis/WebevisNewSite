import styled from "styled-components";
export const Trust = styled.div`
  padding: 100px 0;
  @media screen and (min-width: 1400px) {
    padding: 120px 0 100px 0;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    color: #424954;
    margin-bottom: 55px;
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
