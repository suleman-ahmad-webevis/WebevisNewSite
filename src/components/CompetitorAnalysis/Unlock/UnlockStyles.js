import styled from "styled-components";

export const UnlockContainer = styled.div`
background: url(.png), linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
display: flex;
justify-content: space-around;
align-items: center;
height: 102px;
margin: 50px 0;

h2{
font-weight: 700;
font-size: 35px;
line-height: 44px;
color: #FFFFFF;
margin: 0;
}
`;

export const Button = styled.button`
background: #FFFFFF;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
border-radius: 8px;
width: 358px;
height: 50px;

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