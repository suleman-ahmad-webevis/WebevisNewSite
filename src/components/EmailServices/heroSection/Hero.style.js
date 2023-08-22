import styled from "styled-components";
import background from "../../../assets/images/Services/EmailServices/background.jpg";
export const HeroSection = styled.section`
  background-image: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 991px) {
    background-position: left;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    padding: 0px 28px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.section`
  padding: 95px 0;
  width: 43%;
  @media screen and (max-width: 900px) {
    padding: 55px 0;
  }
  @media screen and (max-width: 991px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  h1 {
    color: #fff;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 20px;

    @media screen and (max-width: 1321px) {
      font-size: 60px;
    }
  
    @media screen and (max-width: 1140px) {
      font-size: 50px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
 
  }
  h2 {
    color: rgba(255, 255, 255, 0.56);
    font-size: 18px;
    max-width: 500px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
    }
  }
  .input {
    display: flex;
    align-items: center;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    width: 95%;
    height: 65px;
    padding: 0px 15px 0 24px;
    input {
      width: 100%;
      background-color: transparent;
      outline: none;
      border: none;
      color: rgba(255, 255, 255, 0.56);
      font-size: 16px;
    }
    button {
      @media screen and (max-width: 1150px) {
        font-size: 13px;
        letter-spacing: 0.7px;
      } 
    }
    
    @media screen and (max-width: 564px) {
      button {
        font-size: 12px;
      }
      padding: 0px 15px 0 15px;
    }
  }
  @media screen and (max-width: 575px) {
    .input {
      width: 100%;
    }
  }
`;
export const HeroImages = styled.section`
  padding: 66px 60px 66px 0;
  img {
    width: 100%;
    @media screen and (max-width: 991px) {
      height: auto;
    }
  }
  @media screen and (max-width: 1100px) {
    padding: 66px 8px 66px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 10px 8px 20px 0;
  }
  @media screen and (max-width: 991px) {
    width: 45%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
