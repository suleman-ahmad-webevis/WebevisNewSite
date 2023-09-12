import styled from "styled-components";

export const ProcessSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 50px;
  h3 {
    ::before {
      content: "";
      display: block;
      position: relative;
      background: #28b781;
      width: 14px;
      height: 14px;
      border-radius: 100px;
      bottom: -22px;
      left: -25px;
    }
  }
  .process {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h2 {
      color: #424954;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
      }

      @media screen and (max-width: 767px) {
        font-size: 28px;
      }
    }
    h4 {
      color: #434956;
      max-width: 1192px;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      text-transform: capitalize;
      @media screen and (max-width: 1199px) {
        font-size: 24px;
      }

      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
  .parent {
    display: flex;
    align-items: flex-start;
    justify-content: center;
padding: 0 20px;
@media screen and (max-width: 991px) {
      align-items: center;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .process_one {
      width: 33%;

      display: flex;
      flex-direction: column;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      .texting {
        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          @media screen and (max-width: 1199px) {
            font-size: 19px;
          }
          @media screen and (max-width: 991px) {
            font-size: 17px;
          }
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 350px;
          @media screen and (max-width: 1199px) {
            font-size: 15px;
          }
          @media screen and (max-width: 991px) {
            font-size: 12px;
          }
        }
      }
    }
    .process_image {
    
      @media screen and (max-width: 1199px) {
        width: 50%;
        padding-right: 10px;
      }

      @media screen and (max-width: 767px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    .process_two {
      display: flex;
      flex-direction: column;
      width: 33%;
      @media screen and (max-width: 767px) {
        width: 100%;
      }

      .texting {
        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          @media screen and (max-width: 1199px) {
            font-size: 19px;
          }
          @media screen and (max-width: 991px) {
            font-size: 17px;
          }
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 350px;
          @media screen and (max-width: 1199px) {
            font-size: 15px;
          }
          @media screen and (max-width: 991px) {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
