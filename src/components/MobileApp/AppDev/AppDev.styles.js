import styled from "styled-components";
export const DevHolder = styled.section`
  padding: 50px 0 100px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0
      calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const Dev = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      display: block;
      margin-bottom: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390));
    }
    h2 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 52px;
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
      font-size: 28px;
      line-height: 35px;
      font-weight: 400;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (35 - 22) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .table {
    border-radius: 15px;
    border: 1px solid #d1d3d4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr;
    }
    .Col {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #d1d3d4;
      padding: 15px 20px;
      border-right: 1px solid #d1d3d4;
      @media screen and (max-width: 1440px) {
        padding: calc(10px + (15 - 10) * (100vw - 390px) / (1440 - 390))
          calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 575px) {
        border-right: 0;
      }
      &:nth-last-child(1) {
        border-right: 0;
        border-bottom: 0;
      }
      &:nth-last-child(2) {
        border-bottom: 0;
        @media screen and (max-width: 575px) {
          border-bottom: 1px solid #d1d3d4;
        }
      }
      &:nth-last-child(3) {
        border-right: 0;
      }
      &:nth-last-child(5) {
        border-right: 0;
      }
      h3 {
        color: #434956;
        font-size: 28px;
        line-height: 34px;
        font-weight: 700;
        @media screen and (max-width: 1440px) {
          font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
          line-height: calc(22px + (34 - 22) * (100vw - 390px) / (1440 - 390));
        }
      }
      .img-holder {
        max-width: 67px;
        @media screen and (max-width: 1440px) {
          max-width: calc(35px + (67 - 35) * (100vw - 390px) / (1440 - 390));
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
      .image-holder {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
      }
      .title {
        display: flex;
        align-items: center;
        gap: 20px;
        @media screen and (max-width: 575px) {
          gap: 10px;
        }
      }
    }
  }
`;
