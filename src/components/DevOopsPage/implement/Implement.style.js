import styled from "styled-components";

export const ImpSec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  h2 {
    color: #424954;
    font-size: 45px;
    display: block;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 50px;
  }
  .main_imp {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
    gap: 100px;
    @media screen and (max-width: 1200px) {
      gap: 50px;
    }
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: center;
    }

    .imp_text {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media screen and (max-width: 767px) {
        width: 100%;

    }

      .text {
        display: flex;
        flex-direction: column;

        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 42px */
          margin-bottom: 10px;
          @media screen and (max-width: 1200px) {
            font-size: 23px;
          }
        }
        p {
          color: #434956;
          max-width: 444px;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
    }
    .imp_image {
      width: 60%;
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
