import styled from "styled-components";

export const ContentCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0px 50px 0;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
    margin: 0;
  }
  p {
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    text-align: center;
    margin: 0;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: calc(24px + (45 - 24) * (100vw - 320px) / (1440 - 320));
    }
    p {
      font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320));
    }
  }
`;

export const ContentCreationContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 50px;
padding: 0 20px;
  @media screen and (max-width: 760px) { display: none; }
`;

export const ContentCreationCards = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const ContentCreationCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
  font-weight: 600;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  color: #434956;
}
p{
  font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;
color: #434956;
}

@media screen and (max-width: 1440px) {
    h2{ font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320)); }
    p{ font-size: calc(14px + (28 - 14) * (100vw - 320px) / (1440 - 320)); }
  }
@media screen and (max-width: 760px) {
  justify-content: flex-start;
  align-items: flex-start;
    img{ width: 72px; height: 72px; }
    h2{ text-align: left; }
    p{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #434956;
    text-align: left; 
    }
  }
`;
export const ContentCreationLevel = styled.div`
display: flex;
`;

export const ContentCreationStage = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ContentCreationArrow = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 153px;
img{ width: 100%; }
  @media screen and (max-width: 760px) { display: none; }
`;  
export const ContentCreationArrowLine = styled.div`
display: none;
justify-content: center;
align-items: center;
height: 72px;
img{ width: 100%; }
  @media screen and (max-width: 760px) { display: flex; }
`;  

export const ContentCreationMobileContent = styled.div`
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 40px;
padding: 0 20px;
  @media screen and (max-width: 760px) { display: flex; }
`;