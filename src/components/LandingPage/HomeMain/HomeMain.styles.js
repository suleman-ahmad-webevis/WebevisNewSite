import styled from "styled-components";
import Background from "../../../assets/images/Homemain/Main-bg.png";
import BG from "../../../assets/images/Homemain/Main-bg-1.png";
export const Main = styled.div`
  background: #2b2c2f;
  background-image: url(${BG.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  color: #fff;
  z-index: 5;
  padding-top: 50px;

  /* position: relative; */
  /* min-height: calc(100vh - 190px); */
  @media screen and (min-width: 768px) {
    background-image: url(${Background.src});
  }
  @media screen and (min-width: 1400px) {
    padding-top: 80px;
    /* width: 100%; */
  }
  /* &:after {
    content: "";
    position: absolute;
    width: 404px;
    height: 17px;
    z-index: -3;
    background-color: #28b781;
    bottom: 192px;
    left: 40px;
  } */
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
    padding: 13px 22px;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    box-shadow: 0px 1px 3px #28b781;
    border-radius: 45px;
    color: #fff;
    font-size: 18px;
  }
  h1 {
    font-size: 45px;
    max-width: 500px;
    padding-bottom: 20px;
    z-index: 2;
    margin: 0 auto;
    @media screen and (min-width: 600px) {
      font-size: 55px;
    }
    @media screen and (min-width: 768px) {
      font-size: 50px;
      max-width: 600px;
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
    font-size: 20px;
    max-width: 500px;
    padding-bottom: 20px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      max-width: 450px;
      margin: 0;
    }
    @media screen and (min-width: 1400px) {
      max-width: 570px;
      font-size: 24px;
      padding-bottom: 42px;
    }
  }
  .Baner {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 576px) {
      display: none;
    }
    img {
      width: 100%;
      margin-bottom: -50px;
    }
  }
  .Banner {
    display: none;
    justify-content: center;
    @media screen and (min-width: 576px) {
      display: flex;
    }
    @media screen and (min-width: 768px) {
      justify-content: start;
    }
    img {
      margin-bottom: -70px;
      border-radius: 111.795px 111.55px 0px 0px;
      @media screen and (min-width: 768px) {
        max-width: 400px;
        border-radius: 92.86px 0px 0px 45.66px;
        margin-bottom: -50px;
      }
      @media screen and (min-width: 992px) {
        max-width: initial;
      }
      @media screen and (min-width: 1400px) {
        display: none;
      }
    }
  }
  .Poster {
    display: none;
    border-radius: 100px 0 0 100px;
    margin-bottom: -80px;
    @media screen and (min-width: 1400px) {
      border-radius: 100px;
      display: block;
    }
  }
`;
