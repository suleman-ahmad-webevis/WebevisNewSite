import styled from "styled-components";
import LevelUpBG from "../../../assets//images/Services/ContentMarkettingServices/LevelUpBG.png";
import LevelUpBGM from "../../../assets//images/Services/ContentMarkettingServices/LevelUpBGM.png";

export const LevelUpContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
background: url(${LevelUpBG.src});
background-position: center;
background-repeat: no-repeat;
padding: 0 80px;

h1{
    font-weight: 600;
    font-size: 45px;
    line-height: 61px;
    color: #FFFFFF;
    margin: 0;
} 
  @media screen and (max-width: 1440px) {
    h1{ font-size: calc(28px + (45 - 28) * (100vw - 340px) / (1440 - 340)); }
  }
  
@media screen and (max-width: 760px) { display: none; }
`;
export const LevelUpButton = styled.button`
background: linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%);
border-radius: 48px;
width: 218px;
height: 50px;
outline: none;
border: none;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
margin-top: 30px;

@media screen and (max-width: 760px) { border-radius: 9.4961px; width: 350px; margin-top: 10px; }
`;
export const LevelUpContainerMobie = styled.div`
height: 625px;
display: none;
flex-direction: column;
align-items: center;
background: url(${LevelUpBGM.src});
background-position: center;
background-repeat: no-repeat;

h1{
  font-weight: 600;
font-size: 28px;
line-height: 150%;
text-align: center;
color: #FFFFFF;
margin-top: 25px;
} 
  
@media screen and (max-width: 760px) { display: flex; }
`;