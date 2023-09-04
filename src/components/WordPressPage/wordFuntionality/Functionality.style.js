import styled from "styled-components";

export const FunSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 60px;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 30px;
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    margin-bottom: 80px;
  }
  .main_fun {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;
    .fun {
      border-radius: 21px;
      background: #fff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.17);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      max-width: 410px;
      height: 90px;
      padding: 0 50px;
      h5 {
        color: #434956;
        white-space: nowrap;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
      }
    }
  }
  .main_div {
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    .text {
        width: 50%;
        margin:auto;
      h3 {
        color: #424954;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        text-transform: capitalize;
        margin-bottom: 30px;
      }
      h4 {
        color: #434956;
        max-width: 649px;
        font-family: Outfit;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 42px */
      }
    }
    .text_image {
        width: 50%;
        margin:auto;
      img {
        border-radius: 8px;
        max-width: 100%;
        height: auto;
      }
    }
  }
`;
