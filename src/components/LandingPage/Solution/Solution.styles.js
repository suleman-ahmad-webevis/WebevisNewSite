import styled from "styled-components";
import bg from "../../../assets/images/Homemain/Background.png";

export const SolutionWrapper = styled.div`
  margin: 0 auto;
  background: ${({ background }) =>
    background ? background : `url(${bg.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* margin-bottom: 10rem; */
  @media screen and (max-width: 768px) {
    /* margin-bottom: 4rem; */
  }
`;

export const SolutionMain = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49px;
  @media screen and (max-width: 1440px) {
    padding: calc(30px + (49 - 30) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const SolutionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 42px;
  justify-content: center;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    gap: 30px;
  }

  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 57px;
    leading-trim: both;
    text-edge: cap;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(35px + (57 - 35) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  button {
    box-shadow: 0px 2px 10px rgba(207, 239, 0, 0.77);
    background: #2b2c2f;
    border-radius: 12px;
    font-family: GeneralSansBold;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    leading-trim: both;
    text-edge: cap;
    text-transform: none;
    color: #ffffff;
    width: 261px;
    height: 50px;
    transition: 0.5s all ease-in-out;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      width: 350px;
    }
    &:hover {
      background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
      transform: translateY(-5px);
      box-shadow: none;
    }
  }
`;
export const SoultionImage = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -80px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -70px;
  }
  img {
    max-width: 100%;
    height: auto;
    display: none;
    @media screen and (max-width: 1040px) {
      display: flex;
    }
  }
`;
export const FloatingImage = styled.div`
  position: absolute;
  top: -35%;
  right: 4%;
  /* @media screen and (max-width: 1350px) {
    top: -30%;
  }
  @media screen and (max-width: 1267px) {
    right: 0;
  } */
  @media screen and (max-width: 1040px) {
    display: none;
  }
  /* img {
    max-width: 100%;
    height: auto;
  } */
`;
