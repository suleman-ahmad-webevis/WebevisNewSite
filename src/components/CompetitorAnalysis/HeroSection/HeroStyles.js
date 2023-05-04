import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/AICompetitorAnalysis/HeroBG.png";

export const HeroContainer = styled.div`
  height: 100vh;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* align-items: center; */
  background: url(${HeroBG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;


export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #FFFFFF;
  }
  p{
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1440px) {
    h2{
      font-size: calc(32px + (60 - 32) * (100vw - 320px) / (1440 - 320));
      line-height: calc(41px + (76 - 41) * (100vw - 320px) / (1440 - 320));
    }
    p{
      font-size: calc(18px + (24 - 18) * (100vw - 320px) / (1440 - 320));
      line-height: calc(30px + (30 - 30) * (100vw - 320px) / (1440 - 320));
    }
  }
`;

export const SearchCompetitor = styled.div`
display: flex;
justify-content: space-between;
width: 586px;
height: 50px;

background: #FFFFFF;
border-radius: 9px;
`;

export const Input = styled.input`font-weight: 500;
font-size: 18px;
line-height: 30px;
color: #A1A1A1;
width: 50%;
outline: none;
border: none;
padding-left: 15px;

::placeholder{
font-size: 18px;
line-height: 30px;
color: #A1A1A1;
}

`;

export const Button = styled.button`
width: 288px;
height: 50px;
background: linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
box-shadow: 0px 4px 16px rgba(41, 41, 41, 0.77);
border-radius: 9px;

font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
`;