import styled from "styled-components";

export const CompetitorServicesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 50px;

h2{
font-weight: 600;
font-size: 45px;
line-height: 150%;
color: #424954;
margin: 30px 0 60px 0;
}
`;

export const CompetitorServicesCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 20px;
column-gap: 130px;
margin-top: 30px;
`;

export const CompetitorService = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

img{ height: 100px; }

h3{
font-weight: 700;
font-size: 28px;
line-height: 150%;
text-align: center;
color: #2B2C2F;
}
`;