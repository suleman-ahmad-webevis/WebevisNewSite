import styled from "styled-components";
export const FlexText = styled.section`
  width: 85%;
  margin: auto;
  h1 {
    margin: auto;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    width: 1190px;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 30px;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(32px + (45 - 32) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1330px) {
    p {
      width: 100%;
    }
  }
`;
export const FlexCard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
  padding: 0 20px;
  margin-top: 30px;
  .back:nth-child(1) {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    h1 {
      color: white;
    }
    p {
      color: white;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 658px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BCard = styled.section`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.17);
  border-radius: 51px;
  padding: 20px 30px 50px;
  text-align: left;
  img {
    object-fit: contain;
    float: left;
    margin: 0;
  }
  h1 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
`;
