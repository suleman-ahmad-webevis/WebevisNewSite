import styled from "styled-components";

export const BoostContainer = styled.div`
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
margin: 0;
}
p{
font-weight: 400;
font-size: 28px;
line-height: 150%;
text-align: center;
color: #434956;
margin: 0 0 50px 0;
}
`;

export const BoostOptions = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
padding: 20px 30px;
grid-gap: 10px;
`;

export const BoostCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 100px;

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
p{
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #A1A1A1;
margin: 0;
}
`;

export const BoostButton = styled.button`
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