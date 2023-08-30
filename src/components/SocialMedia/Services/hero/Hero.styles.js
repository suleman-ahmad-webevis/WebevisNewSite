import background from "../../../../assets/images/Services/digitalbg.png";
import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 776px) {
    background-image: url(${background.src});
    width: 100%;
    height: calc(100vh - 56px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        3deg,
        rgba(57, 57, 57, 0.7) 0%,
        rgba(217, 217, 217, 0) 100%
      );
    }
  }
`;
export const HeroText = styled.div`
  max-width: 655px;
  padding: 60px 20px;
  font-size: 28px;
  line-height: 32px;
  margin-left: 50px;
  position: relative;
  z-index: 2;

  /* @media screen and (max-width: 1570px) {
    width: 53%;
  } */
  @media screen and (max-width: 1400px) {
    width: 70%;
    margin-left: 0;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
  }
  @media screen and (max-width: 776px) {
    color: #fff;
    padding: 20px;
  }

  h1 {
    color: #434956;
    font-size: 70px;
    font-weight: 700;
    line-height: 75px;
    margin-bottom: 20px;

    @media screen and (max-width: 1400px) {
      font-size: 50px;
      line-height: 55px;
    }
    @media screen and (max-width: 992px) {
      font-size: 40px;
    }
    @media screen and (max-width: 776px) {
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 10px;
      color: #fff;
    }
  }
  p {
    margin-bottom: 40px;
    @media screen and (max-width: 992px) {
      font-size: 24px;
      max-width: 400px;
    }
    @media screen and (max-width: 776px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
      max-width: 300px;
    }
  }
`;
export const HeroImage = styled.div`
  background-image: url(${background.src});
  height: 500px;
  background-position: center;
  background-size: cover;

  display: flex;
  width: 1030px;
  @media screen and (max-width: 776px) {
    display: none;
  }
  img {
    width: 100%;
    display: block;
    height: auto;
  }
`;
