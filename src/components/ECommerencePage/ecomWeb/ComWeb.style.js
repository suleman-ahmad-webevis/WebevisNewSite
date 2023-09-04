import styled from "styled-components";
import subtract from "../../../../public/assets/images/ECommerencePage/subtract.png";
export const ComSec = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    @media screen and (max-width: 991px) {
      font-size: 35px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 574px) {
      font-size: 28px;
    }
  }
`;
export const ComMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 574px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .card {
    display: flex;
    flex-direction: column;
    .heading {
      background-image: url(${subtract.src});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 450px;
      height: 56.506px;
      margin-top: 50px;
      margin-bottom: 30px;
      h3 {
        color: #434956;
        font-size: 26px;
        text-align: center;

        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1300px) {
          font-size: 22px;
        }
        @media screen and (max-width: 1200px) {
          font-size: 18px;
        }
        @media screen and (max-width: 767px) {
          font-size: 15px;
        }
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        display: flex;
        align-items: baseline;
        gap: 12px;
        h6 {
          background: #28b781;
          width: 30px;
          height: 30px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          font-size: 19.2px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px; /* 28.8px */
          @media screen and (max-width: 1300px) {
            font-size: 16px;
            width: 27px;
            height: 27px;
          }
          @media screen and (max-width: 767px) {
            font-size: 12px;
            width: 22px;
            height: 22px;
          }
        }
        h5 {
          img {
            width: 30px;
            height: 30px;
            @media screen and (max-width: 1300px) {
              width: 27px;
              height: 27px;
            }
            @media screen and (max-width: 767px) {
              width: 18px;
              height: 18px;
            }
          }
        }

        span {
          color: #434956;
          font-size: 24px;
          display: inline-block;
          flex: 1;
          font-style: normal;
          max-width: 373px;
          font-weight: 400;
          line-height: 150%; /* 36px */
          @media screen and (max-width: 1300px) {
            font-size: 20px;
          }
          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
          @media screen and (max-width: 767px) {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
