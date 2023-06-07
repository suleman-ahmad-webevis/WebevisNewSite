import styled from "styled-components";
import img1 from "../../../assets/images/AboutUs/assests/background.png";
export const AboutSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  background-image: url(${img1.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 10px;
  color: white;
  text-align: center;

  background: linear-gradient(
    15deg,
    #28b781,
    #2b2c2f,
    #084e45,
    #747d38,
    #464e0b,
    #65675a
  );
  background-size: 1200% 1200%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }
  h1 {
    font-size: 70px;
  }
  p {
    max-width: 747px;
    font-family: "Outfit";
    font-size: 28.0778px;
    margin-top: -1rem;
  }
  @media screen and (max-width: 658px) {
    text-align: center;

    h1 {
      font-size: 51px;
    }
    p {
      font-size: 23px;
      line-height: 40px;
    }
  }
`;
