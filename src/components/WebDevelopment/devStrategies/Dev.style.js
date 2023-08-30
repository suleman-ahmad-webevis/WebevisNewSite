import styled from "styled-components";
export const DevSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
  .adding_text {
    width: 83%;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
    h2 {
      color: #434956;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
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
      margin-bottom: 50px;
      @media screen and (max-width: 1023px) {
        font-size: 22px;
      }
      @media screen and (max-width: 574px) {
        font-size: 15px;
      }
    }
  }
`;
export const DevText = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 102px;
  row-gap: 80px;
  width: 88%;
  margin: auto;
  @media screen and (max-width: 1023px) {
    column-gap: 59px;
    row-gap: 51px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 35px;
    row-gap: 31px;
  }
  @media screen and (max-width: 574px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin: auto;
  .circle {
    fill: #fff;
    background-color: white;
    filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  .dev_card {
    h3 {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      max-width: 289px;
      margin-bottom: 20px;
      line-height: 150%;
      @media screen and (max-width: 1200px) {
        font-size: 22px;
      }
      @media screen and (max-width:992px) {
        font-size: 18px;
      }
      @media screen and (max-width:574px) {
        font-size: 24px;
      }
    }
    p {
      color: #434956;
      font-size: 18px;
      font-style: normal;
      max-width: 346px;

      font-weight: 400;
      line-height: 150%;
      @media screen and (max-width: 1200px) {
        font-size: 15px;
      }
      @media screen and (max-width: 574px) {
        font-size: 18px;
      }
    }
  }
`;
