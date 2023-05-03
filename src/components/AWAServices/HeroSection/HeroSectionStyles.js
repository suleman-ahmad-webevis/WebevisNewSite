import styled from "styled-components";

export const HeroSectionContainer = styled.div`
height: 100%;
`;

export const HeroContainer = styled.div`
background: url(.png), linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
height: 625px;
top: 50px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

h2{
margin-top: 70px;
font-weight: 700;
font-size: 60px;
line-height: 76px;
color: #FFFFFF;
}
p{
font-weight: 500;
font-size: 24px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
}
`;

export const AWAButton =styled.button`
background: #FFFFFF;
border-radius: 40px;
width: 356px;
height: 50px;
margin-top: 20px;

label{
font-weight: 700;
font-size: 24px;
line-height: 32px;
background: linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
cursor: pointer;
}
`;

export const CrawlLogContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: -210px;
`;