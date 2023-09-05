import styled from "styled-components";

export const ChooseSec = styled.div`
  .webevis {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 70px 0;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      gap: 40px;
    }
    .inside_text {
      h2 {
        color: #424954;
        max-width: 524px;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 67.5px */
        text-transform: capitalize;
        margin-bottom: 20px;
        @media screen and (max-width: 1100px) {
          font-size: 35px;
        }
        @media screen and (max-width: 574px) {
          font-size: 28px;
        }
      }
      h5 {
        color: #434956;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        max-width: 533px;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1100px) {
          font-size: 23px;
        }
        @media screen and (max-width: 574px) {
          font-size: 18px;
        }
      }
    }
    .inside_image {
      img {
        @media screen and (max-width: 991px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .main_choose {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 80px;
    gap: 30px;
    @media screen and (max-width: 1300px) {
      br {
        display: none;
      }
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .parent {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 30px;
      @media screen and (max-width: 574px) {
        gap: 10px;
      }
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        fill: #fff;
        filter: drop-shadow(0px 1px 13px rgba(0, 0, 0, 0.15));
        border-radius: 100px;
        background-color: #fff;
        @media screen and (max-width: 574px) {
          width: 56.434px;
          height: 56.434px;
          img {
            width: 30.93px;
            height: 30.93px;
          }
        }
      }
      .choose_card {
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
        width: 80%;
        padding: 30px 0 30px 60px;
        @media screen and (max-width: 1200px) {
          padding: 30px 20px 30px 20px;
        }
        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 42px */
          margin-bottom: 10px;
          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }
          @media screen and (max-width: 574px) {
            font-size: 18px;
          }
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;

          font-weight: 400;
          line-height: 150%; /* 27px */
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
          @media screen and (max-width: 574px) {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
