import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/ContentMarkettingServices/HeroBG.png";
import HeroBGM from "../../../assets//images/Services/ContentMarkettingServices/HeroBGM.png";

export const HeroContainer = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background: url(${HeroBG.src});
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    align-items: center;
    padding: 100px 0 185px 0;
  }
`;
export const HeroText = styled.section`
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 320px) / (1440 - 320));
      line-height: calc(41px + (76 - 41) * (100vw - 320px) / (1440 - 320));
    }
  }
  p {
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 320px) / (1440 - 320));
      line-height: calc(30px + (30 - 30) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const HeroContainerMobile = styled.div`
  height: 100vh;
  padding: 0 30px;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  background: url(${HeroBGM.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h2{
font-weight: 700;
font-size: 30px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
  }
  p{
font-weight: 500;
font-size: 16px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
  }
  @media screen and (max-width: 450px) {
    display: flex;
  }
`;

export const Button = styled.button`
width: 327px;
height: 50px;
background: #FFFFFF;
border-radius: 47px;

label{
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 30px;

background: linear-gradient(97.77deg, #0F85A7 0.78%, #06A172 77.81%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
cursor: pointer;
}
  @media screen and (max-width: 1440px) {
    label{
      font-size: calc(18px + (24 - 18) * (100vw - 320px) / (1440 - 320));
      line-height: calc(30px + (30 - 30) * (100vw - 320px) / (1440 - 320));
    }
  }
  @media screen and (max-width: 450px) {
    height: 40px;
    width: 348px;
    align-self: center;
    label{
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    }
  }
`;