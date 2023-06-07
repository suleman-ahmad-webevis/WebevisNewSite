import styled from "styled-components";
export const CompHeading = styled.section`
  width: 90%;
  margin: auto;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #424954;
  }
  h1 {
    font-family: "Outfit";
    text-align: center;
    font-style: normal;
    margin: -15px 0px;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(30px + (45 - 30) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const EmailComp = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
/* display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap; */
  gap: 40px;
`;
export const EmailDiv = styled.section`
  text-align: left;
  margin-top: 40px;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    margin: 20px 0px;
    text-align: left;
    color: #434956;
  }
  p {
    margin: 25px 0px;
    font-family: "Outfit";
    font-style: normal;
    text-align: left;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #434956;
  }
  img {
    width: 99px;
    object-fit: contain;
  }
`;
