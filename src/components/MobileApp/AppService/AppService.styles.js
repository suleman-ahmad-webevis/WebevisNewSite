import styled from "styled-components";
export const ServiceHolder = styled.section`
  padding: 100px 0 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(60px + (100 - 60) * (100vw - 390px) / (1440 - 390)) 0
      calc(25px + (50 - 2) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const Service = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }
  h2 {
    color: #434956;
    font-size: 45px;
    line-height: 50px;
    font-weight: 700;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (52 - 32) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 15px;
    }
  }
  p {
    max-width: 650px;
    color: #434956;
    font-size: 24px;
    line-height: 34px;
    font-weight: 500;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (35 - 22) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const WebCard = styled.div`
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;

  @media screen and (max-width: 575px) {
    justify-content: none;
    column-gap: 10px;
    row-gap: 15px;
  }

  a {
    display: flex;
    width: 47%;
    @media screen and (min-width: 768px) {
      width: 315px;
    }
    @media screen and (max-width: 400px) {
      width: 48%;
    }
  }
  .card {
    width: 100%;
    border-radius: 9px;
    border: 2px solid #eaeaea;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
    padding: 50px 30px 40px;
    @media screen and (max-width: 1440px) {
      padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390))
        calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
    h3 {
      color: #434956;
      font-size: 35px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (35 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (40 - 22) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: #434956;
      max-width: 220px;
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (22 - 18) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
      }
    }
    .img-holder {
      max-width: 28px;
      @media screen and (max-width: 575px) {
        max-width: 18px;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
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
