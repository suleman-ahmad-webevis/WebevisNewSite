import styled from "styled-components";
import Background from "../../assets/images/Homemain/Main-bg.png";
export const Main = styled.div`
  background: #2b2c2f;
  background-image: url(${Background.src});
  width: 100%;
  color: #fff;
  z-index: 5;
  padding-top: 50px;
  /* position: relative; */
  /* min-height: calc(100vh - 190px); */
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
    padding-right: 0;
    @media screen and (min-width: 1400px){
      padding-right: initial;
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
    font-size: 60px;
    max-width: 600px;
    margin-bottom: 30px;
    z-index: 2;
    margin-top: 0;
    @media screen and (min-width: 1400px) {
      font-size: 70px;
      margin-bottom: 55px;
      max-width: initial;
    }
  }
  p {
    font-size: 18px;
    max-width: 450px;
    margin: 0;
    margin-bottom: 20px;
    @media screen and (min-width: 1400px) {
      max-width: 570px;
      font-size: 24px;
      padding-bottom: 42px;
    }
  }
  .Banner {
    display: block;
    max-width: 400px;
    margin-bottom: -50px;
    border-radius: 92.86px 0px 0px 45.66px;
    @media screen and (min-width: 992px){
      max-width: initial;
    }
    @media screen and (min-width: 1400px) {
      display: none;
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
