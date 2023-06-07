import styled from "styled-components";
export const BrilliantSec = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`;
export const BrilliantText = styled.section`
  max-width: 650px;
  h1 {
    font-weight: 600;
    font-size: 45px;
    line-height: 75px;
    font-weight: 700;
    color: #424954;
  }
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 65px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 44px;
    }
  }
  @media screen and (max-width: 658px) {
    h1 {
      margin-top: 4px;
      font-size: 35px;
      line-height: 54px;
    }
  }

  p::after {
    content: " ";
    display: block;
    position: absolute;
    width: 0px;
    border: #424954;
    height: 22px;
    background: linear-gradient(94.51deg, #28b781 16.89%, #cfef00 92.13%);
    opacity: 0.3;
    border-radius: 30px;
    animation: sami 1s linear both;
    animation-play-state: ${({ isVisible }) =>
      isVisible ? "running" : "paused"};
  }
  @keyframes sami {
    from {
      width: 0px;
    }
    to {
      width: 623px;
    }
    /* 100% {
      width: 623px;
    } */
  }

  @media screen and (max-width: 1348px) {
    p::after {
      max-width: 529px;
    }
  }
  @media screen and (max-width: 1020px) {
    p::after {
      max-width: 100%;
    }
  }
`;
export const BrilliantChild = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 30px;
  position: relative;
  @media screen and (max-width: 1020px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const BrilliantImage = styled.section`
  img {
    max-width: 100%;
    margin: auto;
    object-fit: fill;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;
