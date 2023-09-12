import styled from "styled-components";

export const DevelopSec = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  .main_con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @media screen and (max-width: 1220px) {
      flex-direction: column;
    }

    .con {
      margin: auto;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1220px) {
        align-items: center;
      }
      @media screen and (max-width: 574px) {
        align-items: flex-start;
      }
      gap: 20px;
      h2 {
        color: #424954;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        text-transform: capitalize;
        @media screen and (max-width: 1300px) {
          font-size: 30px;
        }
        @media screen and (max-width: 1220px) {
          width: 70%;

          br {
            display: none;
          }
        }
        @media screen and (max-width: 767px) {
          font-size: 28px;
          width: 100%;
        }
      }
      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 590px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .first_con {
          display: flex;
          align-items: baseline;
          .text {
            display: flex;
            flex-direction: column;
            padding-left: 12px;
            margin-bottom: 20px;
            @media screen and (max-width: 574px) {
            }
            h3 {
              color: #434956;
              font-size: 28px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 42px */
              /* margin-bottom: 10px; */
              @media screen and (max-width: 1340px) {
                font-size: 24px;
              }
            }
            h4 {
              color: #434956;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 27px */
              @media screen and (max-width: 1340px) {
                font-size: 14px;
              }
              @media screen and (max-width: 574px) {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .con_image {
      img {
        @media screen and (max-width: 1340px) {
          width: 100%;
        }
        @media screen and (max-width: 574px) {
          height: auto;
        }
      }
    }
  }
`;
