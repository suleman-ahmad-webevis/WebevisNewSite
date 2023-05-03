import styled from "styled-components";
import FreeWebsiteBG from "../../../assets/images/Services/AWAServices/FreeWebsiteBG.png";

export const FreeWebsiteContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
background: url(${FreeWebsiteBG.src});
background-position: center;
background-repeat: no-repeat;
padding: 0 80px;

h1{
font-weight: 700;
font-size: 45px;
line-height: 57px;
color: #2B2C2F;
    margin: 0;
} 
  @media screen and (max-width: 1440px) {
    h1{ font-size: calc(28px + (45 - 28) * (100vw - 340px) / (1440 - 340)); }
  }
  
`;
export const FreeWebsiteButton = styled.button`
width: 358px;
height: 50px;

background: #FFFFFF;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
border-radius: 8px;
margin-top: 30px;

label{
font-weight: 600;
font-size: 24px;
line-height: 32px;
background: linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
cursor: pointer;
}
`;