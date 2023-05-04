import styled from "styled-components";

export const ProcessContainer = styled.div`
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
text-align: center;
color: #424954;
margin: 30px 0 60px 0;
}
`;

export const ProcessCards = styled.div`
display: flex;
gap: 20px;
`;

export const ProcessCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;


h3{
font-weight: 700;
font-size: 28px;
line-height: 150%;
text-align: center;
color: #434956;
}
p{
font-weight: 400;
font-size: 18px;
line-height: 150%;
text-align: center;
color: #434956;
}
`;