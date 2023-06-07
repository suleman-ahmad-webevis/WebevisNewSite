import img1 from "../../EmailServices/assests/bookimg.png";
import styled from "styled-components";
export const BookSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img1.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  margin: auto;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const BookMain = styled.section`
  position: relative;
`;
export const BookOne = styled.section`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  position: absolute;
  top: -30px;
  right: 0;
  width: 40%;
  @media screen and (max-width: 1133px) {
    display: none;
  }
`;
export const BookText = styled.section`
  width: 60%;
  margin-left: 40px;
  h1 {
    padding-top: 20px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    margin: auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  button {
    padding: 12px 0px;

    width: 40%;
    margin-top: 20px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #28b781;
    background: #ffffff;
    box-shadow: 0px 3px 17px rgba(207, 239, 0, 0.73);
    border-radius: 8px;
    margin-bottom: 30px;

    span {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  @media screen and (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`;
export const BookDiv = styled.section`
  width: 40%;
  margin: auto;
  img {
    display: none;
    width: 100%;
    object-fit: contain;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: 1133px) {
    img {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
