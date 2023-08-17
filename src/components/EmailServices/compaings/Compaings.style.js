import styled from "styled-components";
export const CompHeading = styled.section`
  width: 98%;
  margin: auto;
  margin-top: 60px;
  .our-email {
    text-align: center;
    p {
      color: #424954;
      font-family: Outfit;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    h1 {
      font-family: "Outfit";
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 150%;
      color: #424954;
    }
    @media screen and (max-width: 900px) {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 564px) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  }
`;
export const EmailComp = styled.section`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  row-gap: 45px;
  column-gap: 40px;
  margin-top: 85px;
  @media screen and (max-width: 564px) {
    row-gap: 18px;
    column-gap: 10px;
    margin-top: 34px;
  }
`;
export const EmailDiv = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
    @media screen and (max-width: 564px) {
      font-size: 14px;
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 564px) {
      font-size: 18px;
    }
    @media screen and (max-width: 564px) {
      font-size: 12px;
    }
  }
  img {
    margin-bottom: 10px;
    @media screen and (max-width: 564px) {
      margin-bottom: 10px;
      width: 21px;
      height: 20px;
      object-fit: contain;
    }
  }
`;
export const BtnCom = styled.section`
  display: grid;
  justify-content: center;
  margin-top: 50px;
`;
