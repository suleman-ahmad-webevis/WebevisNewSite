import styled from "styled-components";
export const ScopeHolder = styled.section`
  padding-bottom: 50px;
  @media screen and (max-width: 1440px) {
    padding-bottom: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390));
  }
`;
export const ScopeContent = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  .heading {
    max-width: 603px;
    display: block;
    @media screen and (max-width: 991px) {
      display: none;
    }
    @media screen and (max-width: 1440px) {
      max-width: calc(500px + (603 - 500) * (100vw - 992px) / (1440 - 992));
    }
    h2 {
      color: #424954;
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 40px;
      display: block;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
        line-height: calc(36px + (52 - 36) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (40 - 15) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
  }
  .img-holder {
    @media screen and (max-width: 991px) {
      margin-bottom: 30px;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .Content {
    max-width: 650px;
    @media screen and (max-width: 1440px) {
      max-width: calc(500px + (603 - 500) * (100vw - 992px) / (1440 - 992));
    }
    .mobile-ul {
      display: none;
      @media screen and (max-width: 991px) {
        display: block;
      }
    }
    .list {
      display: block;
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    h2 {
      color: #424954;
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 40px;
      display: none;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
        line-height: calc(36px + (52 - 36) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (40 - 15) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 991px) {
        display: block;
      }
    }
  }
  p {
    color: #434956;
    font-size: 28px;
    line-height: 35px;
    font-weight: 400;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
  ul {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    padding-left: 25px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
    li {
      margin-bottom: 25px;
      position: relative;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(18px + (25 - 18) * (100vw - 390px) / (1440 - 390));
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        background: #28b781;
        top: 11px;
        left: -24px;
        @media screen and (max-width: 767px) {
          width: 10px;
          height: 10px;
          top: 6px;
          left: -19px;
        }
      }
    }
  }
`;
