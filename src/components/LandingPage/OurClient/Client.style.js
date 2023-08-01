import styled from "styled-components";
import smbg from "../../../assets/images/Homemain/testimonialsm.png";

export const ClientSwiper = styled.div`
  margin-bottom: 50px;
  margin-top: 4rem;

  /* margin-top: 10rem; */
  /* .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 18px;
    height: 15px;
    border-radius: 89px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    border-radius: 50%;
    border-top-left-radius: 50%;

    background-color: green;
  } */
`;

export const ClientHeading = styled.h1`
  width: 95%;
  margin: 50px auto;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  text-align: center;
  color: #2b2c2f;
`;
export const ClientSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CleintWrapper = styled.div`
  /* position: relative; */
  max-width: 1440px;
  margin: auto;
  margin-bottom: 50px;
  /* box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11); */
  padding: 20px 0;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 548px;
  @media screen and (max-width: 1440px) {
    height: calc(548px + (364 - 548) * (100vw - 390px) / (1440 - 390));
  }
`;

export const ClientCard = styled.section`
  background-image: url(${(props) => props.image.src});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 540px) {
    background-image: url(${smbg.src});
  }
`;

export const ClientText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  gap: 1rem;
  h1 {
    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    position: relative;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
    &::before {
      content: "“";
      position: absolute;
      color: #ffffff;
      font-size: 120px;
    }

    &::before {
      left: -30px; /* Adjust the position as needed */
      top: 0%;
      @media screen and (max-width: 768px) {
        top: -10%;
      }
    }
    &::after {
      content: "“";
      position: absolute;
      color: #ffffff;
      font-size: 120px;
      transform: rotate(180deg);
    }

    &::after {
      left: auto; /* Adjust the position as needed */
      top: 80%;
      @media screen and (max-width: 768px) {
        top: 70%;
      }
      @media screen and (max-width: 484px) {
        top: 70%;
      }
    }
  }
`;
export const PlayVideo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    color: #ffffff;
  }
`;
export const Video = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
`;
export const VideoWrapper = styled.div`
  position: relative;
`;
export const VideoWrapperMain = styled.div`
  position: fixed;
  inset: 0;
  /* left: 0;
  right: 0; */
  margin-left: auto;
  margin-right: auto;
  width: calc(320px + (760 - 320) * (100vw - 390px) / (1440 - 390));
`;
export const Closer = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -30px;
  z-index: 10;
  @media screen and (max-width: 1078px) {
    right: 0;
    top: -40px;
  }
`;
