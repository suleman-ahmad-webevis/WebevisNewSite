import styled from "styled-components";
import Bg from "../../../assets/images/Graphic/Hire-bg.png";
export const HireHolder = styled.section`
  margin: 140px 0 80px 0;
  background-image: url(${Bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1440px) {
    margin: calc(60px + (140 - 60) * (100vw - 390px) / (1440 - 390)) 0 0 0;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #fff;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  .Content {
    padding: 68px 0;
    @media screen and (max-width: 991px) {
      padding-top: calc(45px + (68 - 45) * (100vw - 390px) / (1440 - 390));
    }
    h3 {
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
      }
      &:nth-last-child(1) {
        margin-bottom: 40px;
        @media screen and (max-width: 1440px) {
          margin-bottom: calc(
            30px + (40 - 30) * (100vw - 390px) / (1440 - 390)
          );
        }
      }
    }
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 45px;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
        line-height: calc(28px + (50 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .img-holder {
    max-width: 682px;
    position: absolute;
    bottom: -81px;
    right: -54px;
    @media screen and (max-width: 991px) {
      position: static;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
