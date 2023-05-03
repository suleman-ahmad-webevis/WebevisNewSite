import styled from "styled-components";

export const AuditContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 30px;

h2{
font-weight: 600;
font-size: 45px;
line-height: 150%;
text-align: center;
color: #424954;
margin: 30px 0;
}
`;

export const AuditResults = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

h3{
font-weight: 700;
font-size: 28px;
line-height: 150%;
color: #434956;
margin: 0;
}
p{
font-weight: 500;
font-size: 18px;
line-height: 150%;
color: #434956;
margin: 0;
}
`;

export const ResultOneTitle = styled.div`
margin-left: 35px;
`;

export const ResultTwoTitle = styled.div`
margin-bottom: 35px;
padding-left: 40px;
`;
export const AuditCardsContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;
`;

export const AuditCards = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
padding-left: 40px;
`;

export const AuditCard = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const AuditCardHeading = styled.div`

h4{
font-weight: 700;
font-size: 28px;
line-height: 150%;
color: #434956;
margin: 0;
}
p{
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #434956;
margin: 0;
}
`;

