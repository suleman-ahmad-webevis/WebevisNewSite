import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Devbg from "../../../assets/images/Expert/devInfo.png";

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
  @media screen and (max-width: 1440px) {
    /* flex-direction: column; */
    /* align-items: center; */
    padding: 60px calc(20px + (50 - 20) * (100vw - 390px) / (1440 - 390)) 0
      calc(20px + (50 - 20) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 856px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 45%;
  margin-bottom: 7rem;
  @media screen and (max-width: 856px) {
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
      background: linear-gradient(97.77deg, #00c3fb 0.78%, #00feb1 77.81%),
        linear-gradient(0deg, #ffffff, #ffffff);

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
  width: 55%;
  margin: 0 auto 0 auto;
  text-align: left;

  @media screen and (max-width: 856px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImageWrapper = styled(Image)`
  /* display: inline-block; */
  max-width: 100%;
  height: auto;
  margin: 0 141px -5px auto;
`;
export const DevInfoWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Devinfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: url(${Devbg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 226px;
  height: 233px;
  right: 0;
  top: 10%;
  @media screen and (max-width: 856px) {
    top: 15% !important;
    right: 5%;
  }
  @media screen and (max-width: 510px) {
    top: 10% !important;
    right: 0%;
  }
  @media screen and (max-width: 1440px) {
    width: calc(126px + (239 - 126) * (100vw - 390px) / (1440 - 390));
    height: calc(108px + (204 - 108) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 1216px) {
    top: 0;
    gap: 7px;
  }
  h3 {
    color: #434956;
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(9.511px + (18 - 9.511) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Pill = styled.span`
  color: #434956;
  text-align: center;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 6.5px 10px;
  border-radius: 35px;
  background: rgba(234, 247, 238, 1);
  @media screen and (max-width: 1440px) {
    font-size: calc(7.397px + (18 - 7.397) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 768px) {
    padding: 3.5px 5.28px;
  }
`;