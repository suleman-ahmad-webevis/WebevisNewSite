import styled from "styled-components";
import Image from "next/image";
export const Main = styled.div`
  background: #2b2c2f;
  background-size: cover;
  background-position: center;
  width: 100%;
  color: #fff;
  z-index: 5;
  padding-top: 50px;
  margin-bottom: 100px;
  @media screen and (min-width: 992px) {
    margin-bottom: 300px;
  }
  @media screen and (min-width: 1400px) {
    padding-top: 80px;
  }
  .container {
    @media screen and (min-width: 767px) {
      padding-right: 0;
    }
    @media screen and (min-width: 1400px) {
      padding-right: initial;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    @media screen and (min-width: 768px) {
      justify-content: start;
      padding-bottom: 0;
    }
  }
  button {
    padding: 13px 30px;
    margin: 0 auto;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    box-shadow: 0px 1px 3px #28b781;
    border-radius: 45px;
    color: #fff;
    font-size: 18px;
    margin-bottom: 60px;
  }
  h1 {
    font-size: 50px;
    padding-bottom: 20px;
    z-index: 2;
    text-align: center;
    @media screen and (min-width: 600px) {
      font-size: 55px;
    }
    @media screen and (min-width: 768px) {
      font-size: 50px;
      margin-top: 0;
      margin-bottom: 20px;
      padding-bottom: 0;
    }
    @media screen and (min-width: 992px) {
      font-size: 60px;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1400px) {
      font-size: 70px;
      margin-bottom: 55px;
      max-width: initial;
    }
  }
  p {
    padding-bottom: 20px;
    margin: 0 auto;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      margin: 0;
    }
    @media screen and (min-width: 1400px) {
      font-size: 24px;
      padding-bottom: 42px;
    }
  }
  .video {
    display: flex;
    justify-content: center;
    transition: 0.5s all ease-in-out;
    img {
      margin-bottom: -80px;
      box-shadow: 0px -25px 20px -20px rgba(40, 183, 129, 1),
        25px 0px 20px -20px rgba(40, 183, 129, 1),
        0px 25px 20px -20px rgba(40, 183, 129, 1),
        -25px 0px 20px -20px rgba(40, 183, 129, 1);
      @media screen and (min-width: 400px) {
        margin-bottom: -100px;
      }
      @media screen and (min-width: 576px) {
        margin-bottom: -120px;
      }
      @media screen and (min-width: 768px) {
        margin-bottom: -150px;
      }
      @media screen and (min-width: 992px) {
        margin-bottom: -180px;
      }
      @media screen and (min-width: 1130px) {
        margin-bottom: -200px;
      }
      @media screen and (min-width: 1200px) {
        margin-bottom: -240px;
      }
    }
  }
  video {
    width: 100%;
    margin-top: -50px;
  }
`;
export const ResponsiveImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
    height: ${({ maxh, minh }) => (
      maxh,
      minh
        ? `calc(${minh}px + (${maxh} - ${minh}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
`;
