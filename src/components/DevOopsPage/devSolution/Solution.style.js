import styled from "styled-components";

export const SolutionSec = styled.div`
margin-top: 100px;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 60px;
    @media screen and (max-width: 991px) {
    font-size: 35px;
       
      }
    @media screen and (max-width: 574px) {
    font-size: 28px;
       
      }
  }
  .main_solution {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 22px;
    background: #2b2c2f;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 574px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .solution {
      border-right: 2px solid #5b5b5b;
      padding: 25px 44px;
      @media screen and (max-width: 767px) {
        padding: 25px 30px;
      }
      @media screen and (max-width: 574px) {
        padding: 25px 20px;
        border-bottom: 2px solid #5b5b5b;
        border-right: none;
        &:nth-child(4) {
          border-bottom: none;
        }
      }

      &:nth-child(4) {
        border-right: none;
      }
      .square {
        border-radius: 14px;
        background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
        width: 82px;
        height: 82px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        color: #fff;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        margin-bottom: 30px;
        @media screen and (max-width: 1200px) {
          font-size: 24px;
        }
      }
      p {
        color: #fff;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
        @media screen and (max-width: 1330px) {
          br {
            display: none;
          }
        }
        @media screen and (max-width: 1200px) {
          font-size: 18px;
        }
      }
    }
  }
`;
