import styled from "styled-components";
import LogoBG from "../../../assets/images/Graphic/Logo-bg.png";
import PresentBG from "../../../assets/images/Graphic/Presentation-img.png";
import InterfaceBG from "../../../assets/images/Graphic/interface-bg.png";
export const GameHolder = styled.section`
  padding: 100px 0 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(60px + (100 - 60) * (100vw - 390px) / (1440 - 390)) 0
      calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
  button {
    width: 223px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: #fff;
    background-color: #2b2c2f;
    border-radius: 7px;
    box-shadow: 0px 2px 15px 3px rgba(40, 183, 129, 0.83);
    text-align: start;
    padding: 10px 16px;
    white-space: nowrap;
    transition: 0.5s all ease-in-out;
    @media screen and (max-width: 575px) {
      width: 159px;
      font-size: 13px;
    }
    &:hover {
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    }
    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      @media screen and (max-width: 575px) {
        font-size: 11px;
      }
    }
  }
`;
export const Game = styled.div`
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(28px + (50 - 28) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(28px + (32 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const GameContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 36px;
  @media screen and (max-width: 991px) {
    gap: calc(20px + (30 - 20) * (100vw - 390px) / (991 - 390));
    margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (991 - 390));
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .Media,
  .LogoHolder,
  .Add {
    width: 30%;
    border-radius: 37px;
    @media screen and (max-width: 991px) {
      width: 50%;
    }
    @media screen and (max-width: 767px) {
      width: 60%;
      border-radius: 25px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .Media {
    border-radius: 37px;
    padding-bottom: 35px;
    background: var(
      --linear,
      linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
    );
    .img-holder {
      padding: 33px 66px 21px 13px;
    }
  }
  .LogoHolder {
    .Logo,
    .Email {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 37px;
      @media screen and (max-width: 767px) {
        border-radius: 25px;
      }
    }
    .Logo {
      background-image: url(${LogoBG.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 20px 50px 16px 40px;
      margin-bottom: 18px;
      @media screen and (max-width: 991px) {
        padding: 20px calc(25px + (50 - 25) * (100vw - 390px) / (991 - 390))
          16px calc(25px + (50 - 25) * (100vw - 390px) / (991 - 390));
      }
    }
    .Email {
      background: #6fcacc;
      padding: 0 14px 4px 38px;
    }
  }
  .Add {
    background: var(--new, linear-gradient(135deg, #28b781 0%, #cfef00 100%));
    padding: 60px 13px 30px;
    h3 {
      padding-top: 21px;
    }
  }
`;
export const Cards = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (max-width: 1440px) {
    margin-bottom: calc(60px + (80 - 60) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: calc(17px + (40 - 17) * (100vw - 390px) / (991 - 390));
  }
  .Presentation,
  .Interface {
    background-image: url(${PresentBG.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 304px;
    width: 49%;
    border-radius: 37px;
    display: flex;
    align-items: end;
    justify-content: center;
    h3 {
      margin-bottom: 30px;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(13px + (30 - 13) * (100vw - 390px) / (1440 - 390));
      }
    }
    @media screen and (max-width: 1440px) {
      height: calc(164px + (304 - 164) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 991px) {
      width: 60%;
      border-radius: 25px;
    }
    @media screen and (max-width: 767px) {
      width: 70%;
      border-radius: 25px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .Interface {
    background-image: url(${InterfaceBG.src});
    align-items: center;
    justify-content: end;
    h3 {
      margin-bottom: 0;
      margin-right: 45px;
      @media screen and (max-width: 1440px) {
        margin-right: calc(10px + (45 - 10) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const Help = styled.div`
  margin-bottom: 30px;
  h2 {
    text-align: start;
    line-height: 60px;
    margin-bottom: 0;

    @media screen and (max-width: 1400px) {
      font-size: 35px;
      line-height: 42px;
    }
    @media screen and (max-width: 575px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  h3 {
    font-size: 24px;
    line-height: 40px;
    color: #434956;
    font-weight: 600;
    @media screen and (max-width: 1400px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .ColHolder {
    /* max-width: 1033px; */
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      justify-content: center;
      flex-flow: wrap;
    }
    .Col {
      width: 20%;
      border: 4px solid;
      border-image: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%) 1;
      display: flex;
      align-items: center;
      gap: 27px;
      justify-content: center;
      margin: 0 -2px;
      padding: 40px 10px;
      @media screen and (max-width: 991px) {
        width: 33%;
        margin: 0 -2px 15px;
      }
      @media screen and (max-width: 767px) {
        width: 50%;
      }
      @media screen and (max-width: 406px) {
        width: 47%;
      }
      &:nth-last-child(2) {
        @media screen and (max-width: 406px) {
          margin-left: 21px;
        }
      }
      &:nth-last-child(4) {
        @media screen and (max-width: 406px) {
          margin-left: 21px;
        }
      }
      &.heading {
        display: block;
        padding: 0 27px 0 0;
        margin: 0;
        border: 0;
        width: initial;
        white-space: nowrap;
        button {
          margin: 15px 0;
          display: none;
          @media screen and (max-width: 991px) {
            display: flex;
          }
        }
      }
    }
  }
`;
export const Quote = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 50px;
  @media screen and (max-width: 1140px) {
    align-items: center;
  }
  h3 {
    font-size: 26px;
    color: #434956;
    font-weight: 400;
    text-align: start;
  }
  button {
    display: flex;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  .QuoteHolder,
  .Quote {
    max-width: 1109px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .Quote {
      width: 50%;
      justify-content: start;
      flex-wrap: nowrap;
      gap: 20px;
      margin-bottom: 32px;
      @media screen and (max-width: 991px) {
        margin-bottom: calc(20px + (32 - 20) * (100vw - 390px) / (992 - 390));
      }
      @media screen and (max-width: 575px) {
        width: 100%;
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
        @media screen and (max-width: 991px) {
          margin-bottom: calc(20px + (32 - 20) * (100vw - 390px) / (992 - 390));
        }
      }
      &:nth-last-child(2) {
        margin-bottom: 0;
        @media screen and (max-width: 991px) {
          margin-bottom: calc(20px + (32 - 20) * (100vw - 390px) / (992 - 390));
        }
      }
      h3 {
        @media screen and (max-width: 1440px) {
          font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
          line-height: calc(28px + (32 - 28) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
  }
`;
