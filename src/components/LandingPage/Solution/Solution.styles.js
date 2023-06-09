import styled from "styled-components";
import bg from "../../../assets/images/Homemain/Background.png";

export const SolutionWrapper = styled.div`
  /* width: 90%; */
  margin: 0 auto;
  background: url(${bg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 10rem;
`;
export const SolutionMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49px;
  @media screen and (max-width: 1440px) {
    padding: calc(30px + (49 - 30) * (100vw - 390px) / (1440 - 390));
  }
`;
export const SolutionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 42px;
  justify-content: center;
  width: 70%;

  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 57px;
    leading-trim: both;
    text-edge: cap;
    color: #ffffff;
  }
  button {
    filter: drop-shadow(0px 2px 37px rgba(207, 239, 0, 0.77));
    background: #2b2c2f;
    border-radius: 12px;
    /* font-family: "General Sans"; */
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    leading-trim: both;
    text-edge: cap;
    text-transform: uppercase;
    color: #ffffff;
    width: 261px;
    height: 50px;
  }
`;
export const SoultionImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    display: none;
  }
`;
export const FloatingImage = styled.div`
  position: absolute;
  top: -30%;
  right: 4%;
  @media screen and (max-width: 1267px) {
    right: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
