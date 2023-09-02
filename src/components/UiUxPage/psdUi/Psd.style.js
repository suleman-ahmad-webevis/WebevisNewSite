import styled from "styled-components";

export const PsdSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  justify-content: center;
  h2 {
    color: #424954;
    font-size: 45px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 31px;
    @media screen and (max-width: 574px) {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  p {
    color: #434956;
    text-align: center;
    width: 70%;
    margin: auto;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    margin-bottom: 86px;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    @media screen and (max-width: 574px) {
      font-size: 18px;
    }
  }
  .main_psd {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 70px;
    @media screen and (max-width: 1200px) {
      gap: 50px;
      align-items: center;
    }
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 574px) {
      grid-template-columns: repeat(1, 1fr);
    }
    h3 {
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      white-space: nowrap;
      font-weight: 700;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1200px) {
        font-size: 24px;
      }
    }
    h4 {
      color: #434956;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
    .psd {
      display: flex;
      flex-direction: column;

      .first_psd {
        display: flex;
        align-items: center;
        gap: 30px;
        @media screen and (max-width: 767px) {
          gap: 15px;
        }
      }
      .image {
        img {
          @media screen and (max-width: 574px) {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
`;
