import styled from "styled-components";

export const ApproachContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 20px;

h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
   }
h3{
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h2{ font-size: calc(24px + (45 - 24) * (100vw - 340px) / (1440 - 340)); }
    h3{ font-size: calc(18px + (28 - 18) * (100vw - 340px) / (1440 - 340)); }
  }
`;

export const ApproachCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
margin-top: 50px;
  @media screen and (max-width: 1350px) { width: 85%; }
  @media screen and (max-width: 1250px) { width: 90%; }
  @media screen and (max-width: 1170px) { width: 95%; }
  @media screen and (max-width: 1120px) { width: 100%; }
`;
export const Cards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
@media screen and (max-width: 870px) { flex-direction: column;}
`;

export const Card = styled.div`
width: 368px;
height: 191px;
background: url(.png), linear-gradient(110.26deg, rgba(12, 145, 204, 0.82) -1.17%, rgba(2, 185, 128, 0.87) 60.57%);
border-radius: 6.67508px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 20px;
margin-bottom: 30px;

h2{
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    padding: 0;
}
p{
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    padding: 0;
}
  @media screen and (max-width: 1440px) {
    h2{ font-size: calc(21px + (24 - 21) * (100vw - 340px) / (1440 - 340)); }
    p{ font-size: calc(16px + (18 - 16) * (100vw - 340px) / (1440 - 340)); }
  }
@media screen and (max-width: 870px) { width: 330px; height: 172px;}
`;

export const ApproachCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

export const ConnectAudit = styled.div`
display: flex;
align-items: center;

img{ align-self: flex-end; }

@media screen and (max-width: 1020px) { img{ display: none; }}
`;