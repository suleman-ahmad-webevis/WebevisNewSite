import styled from "styled-components";

export const AssurSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  background: #2b2c2f;
  width: 100%;
  gap: 50px;
  .btns {
    margin-top: 30px;
    @media screen and (max-width: 991px) {
      margin-bottom: 40px;
    }
  }
  .image {
    flex-basis: 50%;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    img {
      width: 100%;
      @media screen and (max-width: 991px) {
        height: auto;
      }
    }
  }
  .main_assurance {
    flex-basis: 50%;
    @media screen and (max-width: 991px) {
      padding-left: 20px;
    }
    h2 {
      color: #fff;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 50px; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 60px;
      @media screen and (max-width: 1200px) {
        font-size: 38px;
      }
      @media screen and (max-width: 574px) {
        font-size: 22px;
        line-height: 32px;
      }
    }
    .assurance1 {
      display: flex;
      gap: 12.5px;
      padding: 0px 7px;
      @media screen and (max-width: 574px) {
        padding: 0px 7px;

      }
      .img {
        display: flex;
        @media screen and (max-width: 574px) {
          img{

            width: 30.476px;
            height: 34.82px;
          }
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        h5 {
          color: #fff;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 42px */
          text-transform: uppercase;
          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }
          @media screen and (max-width: 574px) {
            font-size: 17px;
          }
        }
        p {
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 386px;
          @media screen and (max-width: 574px) {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
