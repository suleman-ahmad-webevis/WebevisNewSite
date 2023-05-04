import styled from "styled-components";

export const SpeakWaysContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

h2{
font-weight: 600;
font-size: 45px;
line-height: 150%;
text-align: center;
color: #424954;
margin: 50px 0;
}
`;

export const SpeakWaysOptions = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 70px;
`;

export const SpeakWaysCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

h3{
font-weight: 600;
font-size: 28px;
line-height: 150%;
color: #434956;
margin: 0;
}
h5{
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #434956;
margin: 0;
}
`;
