import styled from "styled-components";
export const MethdologyHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(28px + (50 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    max-width: 862px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const CardHolder = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    justify-content: center;
    gap: 15px;
  }
  .Card {
    width: 32%;
    padding: 39px 37px;
    border-radius: 9px;
    color: #434956;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.13);
    @media screen and (max-width: 991px) {
      width: 48%;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    &:hover {
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      color: #fff;
      img {
        filter: invert(100%) sepia(52%) saturate(47%) hue-rotate(300deg)
          brightness(115%) contrast(100%);
      }
      li {
        &::before {
          background-color: #fff;
        }
      }
    }
    .img-holder {
      max-width: 97px;
      min-height: 97px;
      margin-bottom: 25px;
      @media screen and (max-width: 1440px) {
        max-width: calc(84px + (97 - 84) * (100vw - 390px) / (1440 - 390));
        min-height: calc(79px + (97 - 79) * (100vw - 390px) / (1440 - 390));
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 22px;
      @media screen and (max-width: 1440px) {
        font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
        line-height: calc(28px + (32 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
    li {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 15px;
      position: relative;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #434956;
        top: 10px;
        left: -18px;
        border-radius: 100px;
        @media screen and (max-width: 1440px) {
          width: calc(8px + (10 - 8) * (100vw - 390px) / (1440 - 390));
          height: calc(8px + (10 - 8) * (100vw - 390px) / (1440 - 390));
        }
        @media screen and (max-width: 575px) {
          top: 8px;
        }
      }
    }
  }
`;
