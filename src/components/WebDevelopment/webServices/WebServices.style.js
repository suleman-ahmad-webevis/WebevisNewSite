import styled from "styled-components";

export const WebSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0;
  .web_texting {
    width: 88%;
    margin: auto;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
    h2 {
      color: #434956;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      margin-bottom: 30px;
      @media screen and (max-width: 1023px) {
        font-size: 35px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
    p {
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      @media screen and (max-width: 574px) {
        font-size: 16px;
      }
    }
  }
`;
export const WebCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 50px;
  @media screen and (max-width: 1204px) {
    justify-content: center;
  }
  .card {
    border-radius: 9px;
    border: 2px solid #eaeaea;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
    padding: 50px 30px;
    flex-basis: 23%;
    @media screen and (max-width: 1204px) {
      flex-basis: 28%;
    }
    @media screen and (max-width: 991px) {
      flex-basis: 46%;
    }
    @media screen and (max-width: 574px) {
      flex-basis: 100%;
    }
    h3 {
      color: #434956;
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 20px;
      height: 90px;
      @media screen and (max-width: 1204px) {
        font-size: 30px;
      }
    }
    p {
      color: #434956;
      max-width: 220px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 50px;
      @media screen and (max-width: 1204px) {
        font-size: 16px;
      }
    }
  }
  .card:hover {
    background: #28b781;
    h3 {
      color: white;
    }
    p {
      color: white;
    }
    img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
        brightness(102%) contrast(102%);
        cursor: pointer;
    }
  }
`;
