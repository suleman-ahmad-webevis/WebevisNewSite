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
  @media screen and (max-width: 1399px) {
    padding-right: 10px;
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
  h1,
  span {
    color: #fff;
    text-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (58 - 32) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      font-size: 35px;
    }
    @media screen and (max-width: 768px) {
      font-size: calc(32px + (58 - 32) * (100vw - 390px) / (1440 - 390));
    }

    span {
      background: linear-gradient(97.77deg, #00c3fb 0.78%, #00feb1 77.81%),
        linear-gradient(0deg, #ffffff, #ffffff);

      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

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
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      br {
        display: none;
      }
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
  @media screen and (max-width: 767px) {
    max-width: 500px;
    justify-content: center;
  }
`;

export const ImageWrapper = styled(Image)`
  /* display: inline-block; */
  max-width: 100%;
  height: auto;
  margin: 0 141px -121px auto;
`;
export const DevInfoWrapper = styled.div`
  position: relative;
  display: flex;
  .image-holder {
    max-width: 700px;

    @media screen and (max-width: 1399px) {
      max-width: 600px;
    }
    @media screen and (max-width: 1199px) {
      max-width: 470px;
    }
    @media screen and (max-width: 768px) {
      max-width: 600px;
    }

    @media screen and (max-width: 767px) {
      max-width: 450px;
    }
    @media screen and (max-width: 445px) {
      max-width: 320px;
    }
  }
`;

export const Devinfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8.75px;
  background: url(${Devbg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 226px;
  //height: 233px;
  right: 0;
  top: 10%;
  text-align: center;
  padding: 15px 15px 40px;
  /* overflow: hidden; */
  @media screen and (max-width: 768px) {
    top: 0% !important;
    right: 10%;
  }
  @media screen and (max-width: 767px) {
    top: 0% !important;
    right: 0%;
  }
  @media screen and (max-width: 576px) {
    padding: 15px 10px 20px;
  }

  @media screen and (max-width: 1440px) {
    width: calc(126px + (239 - 126) * (100vw - 390px) / (1440 - 390));
    //min-height: calc(108px + (204 - 108) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 1216px) {
    top: 0;
    gap: 7px;
  }
  h3 {
    color: #434956;

    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      font-size: 22px;
    }
    @media screen and (max-width: 768px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;

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

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
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
