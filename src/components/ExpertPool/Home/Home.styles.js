import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const StyledHome = styled.div`
  background: #2b2c2f;
`;

export const HomeWrapper = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 50px 0px 50px;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 60px calc(20px + (50 - 20) * (100vw - 390px) / (800 - 390)) 0
      calc(20px + (50 - 20) * (100vw - 390px) / (800 - 390));
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 50%;
  margin-bottom: 7rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 1.5rem;
  }
  h1 {
    color: #fff;
    text-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 58px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (58 - 32) * (100vw - 390px) / (1440 - 390));
    }

    span {
      text-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
      font-size: 58px;
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      @media screen and (max-width: 1440px) {
        font-size: calc(32px + (58 - 32) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 1180px) {
        br {
          display: none;
        }
      }
    }
  }

  p {
    color: #fff;
    font-size: 20px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1180px) {
      br {
        display: none;
      }
    }
  }

  button {
    margin-top: 10px;
  }
  @media screen and (max-width: 1050px) {
    margin-bottom: 4rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

export const fadeOut = keyframes`
   0%{
opacity: 0;
   }
      
  100% {
    opacity: 1;
  }
`;

export const ImageWrapper = styled(Image)`
  display: ${({ index, currentImageIndex }) =>
    index === currentImageIndex ? "flex" : "none"};
  max-width: 100%;
  height: auto;
  animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 1;
`;
