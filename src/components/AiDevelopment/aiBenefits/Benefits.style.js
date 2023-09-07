import styled from "styled-components";

export const BenefitSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 30px;
  }
  .text {
    width: 50%;
    @media screen and (max-width: 991px) {
      width: 80%;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
    }
    h3 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 20px;
      @media screen and (max-width: 1400px) {
        font-size: 35px;
      }
      @media screen and (max-width: 767px) {
        font-size: 32px;
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      max-width: 555px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1400px) {
        font-size: 24px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
  .side_text {
    width: 50%;
    @media screen and (max-width: 991px) {
      width: 80%;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
    }
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    .main_side {
      display: flex;
    }
    .white {
      border-radius: 12px;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
      padding: 10px 30px 10px 15px;
      margin-right: -20px;

      small {
        color: #434956;
        font-size: 18px;
        font-style: normal;
        text-align: center;
        font-weight: 600;
        line-height: 150%; /* 27px */
        @media screen and (max-width: 1400px) {
          font-size: 15px;
        }
      }
    }
    .gradient {
      border-radius: 12px;

      background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
      padding: 10px 15px;
      @media screen and (max-width: 574px) {
        padding: 10px 6px;
        display: flex;
    align-items: center;
    justify-content: center;

    }

      h6 {
        color: #fff;
        font-size: 18px;
        font-style: normal;
        text-align: center;
        font-weight: 600;
        line-height: 150%; /* 27px */
        @media screen and (max-width: 1400px) {
          font-size: 15px;
        }
      }
    }
  }
`;
