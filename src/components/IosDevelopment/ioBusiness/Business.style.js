import styled from "styled-components";

export const BusinessSec = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

  .main_business {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .business_text {
      width: 50%;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      h3 {
        max-width: 542px;
        color: #424954;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 67.5px */
        text-transform: capitalize;
        margin-bottom: 30px;
        @media screen and (max-width: 1200px) {
          font-size: 35px;
        }
        @media screen and (max-width: 991px) {
          font-size: 28px;
        }
      }
      p {
        max-width: 669px;

        color: #434956;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 42px */
        text-transform: capitalize;
        @media screen and (max-width: 1200px) {
          font-size: 24px;
        }
        @media screen and (max-width: 991px) {
          font-size: 18px;
        }
      }
    }
    .business_image {
      width: 50%;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
