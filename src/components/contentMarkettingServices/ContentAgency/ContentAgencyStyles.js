import styled from "styled-components";

export const ContentAgencyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 0px;

h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin: 0;
    text-align: center;
   }
p{
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  color: #434956;
  margin: 0;
  text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h2{ font-size: calc(24px + (45 - 24) * (100vw - 340px) / (1440 - 340)); }
    p{ font-size: calc(18px + (28 - 18) * (100vw - 340px) / (1440 - 340)); }
  }
`;

export const ContentAgencyContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 50px;
margin-top: 50px;
padding: 20px;
@media screen and (max-width: 768px) { grid-template-columns: 1fr 1fr; }
`;


export const ContentAgencyCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

h2{
font-weight: 700;
font-size: 28px;
line-height: 150%;
text-align: left;
color: #434956;
margin-top: 10px;
}
p{
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  color: #434956;
}

@media screen and (max-width: 1440px) {
    h2{ font-size: calc(18px + (28 - 18) * (100vw - 340px) / (1440 - 340)); }
    p{ font-size: calc(16px + (18 - 16) * (100vw - 340px) / (1440 - 340)); }
  }
`;


export const ContentAgencyButton = styled.button`
background: linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%);
border-radius: 8px;
width: 355px;
height: 50px;
outline: none;
border: none;
margin: 50px 70px 0 0;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #FFFFFF; 
@media screen and (max-width: 1340px) { margin: 0; }
`;