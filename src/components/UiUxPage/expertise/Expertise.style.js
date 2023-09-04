import styled from "styled-components";

export const ExpertiseSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 70px;
    @media screen and (max-width: 991px) {
          font-size: 35px;
        }
        @media screen and (max-width: 767px) {
          font-size: 28px;
        }
  }
  p {
    color: #434956;
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    @media screen and (max-width: 991px) {
          font-size: 24px;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
  }
  .main_expert {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    @media screen and (max-width: 1023px) {
          flex-wrap: wrap;
    
  }
    .expert {
      display: flex;
      align-items: center;
      flex-direction: column;
      .circle {
        fill: #fff;
        background-color: white;
        filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        margin-bottom: 30px;
      }
      h3 {
        color: #434956;
        text-align: center;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 67.5px */
        margin-bottom: 20px;
        @media screen and (max-width: 1200px) {
          font-size: 35px;
        }
         @media screen and (max-width: 991px) {
          font-size: 28px;
        }
      }
      h4 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1200px) {
          font-size: 24px;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
      }
    }
  }
`;
