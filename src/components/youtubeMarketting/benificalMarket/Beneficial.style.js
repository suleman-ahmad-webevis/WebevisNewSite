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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  width: 95%;
  margin: auto;
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
  @media screen and (max-width:992px){
    flex-wrap: wrap;
}
`;
export const BCard = styled.section`
width: 100%;
  height: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.17);
  border-radius: 51px;
  padding: 20px 10px 10px;
  text-align: left;
  box-sizing: border-box;
  overflow: hidden;
@media screen and (max-width:1200px){
  height: 559px;
}
  img {
    width: 150px;
    margin: auto;
    margin-left: -10px;
    object-fit: contain;
  }
  h1 {
    width: 90%;
    margin: auto;
    margin-left: 30px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin-bottom: 10px;
  }
  p {
    width: 80%;
    margin: auto;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    overflow: auto;
  }
`;
