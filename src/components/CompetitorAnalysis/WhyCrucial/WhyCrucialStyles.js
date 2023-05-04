import styled from "styled-components";

export const CrucialContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

h2{
font-weight: 600;
font-size: 45px;
line-height: 150%;
color: #424954;
margin: 30px 0;
}
`;

export const CrucialOptions = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
padding: 20px 30px;
grid-gap: 10px 80px;
`;

export const CrucialCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 20px;

h3{
font-weight: 700;
font-size: 28px;
line-height: 150%;
color: #434956;
margin: 0;
}
h5{
font-weight: 400;
font-size: 20px;
line-height: 150%;
color: #434956;
margin: 0;
}
`;

export const CrucialButton = styled.button`
width: 209px;
height: 50px;

background: linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%);
border-radius: 54px;
margin-top: 30px;

font-weight: 700;
font-size: 20px;
line-height: 150%;
color: #FFFFFF;
`;
export const CrucialButtonDiff = styled.button`
width: 209px;
height: 50px;
background: linear-gradient(97.77deg, #1FABD3 0.78%, #1CCC97 77.81%);
border-radius: 54px;
margin-top: 30px;

font-weight: 700;
font-size: 20px;
line-height: 150%;
color: #FFFFFF;
`;