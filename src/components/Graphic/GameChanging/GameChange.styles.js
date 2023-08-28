import styled from "styled-components";
import LogoBG from "../../../assets/images/Graphic/Logo-bg.png";
import PresentBG from "../../../assets/images/Graphic/Presentation-img.png";
import InterfaceBG from "../../../assets/images/Graphic/interface-bg.png";
export const GameHolder = styled.section`
  padding: 100px 0;
`;
export const Game = styled.div`
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 30px;
  }
  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const GameContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 36px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .Media {
    width: 30%;
    padding-bottom: 40px;
    border-radius: 37px;
    background: var(
      --linear,
      linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
    );
    .img-holder {
      padding: 33px 66px 21px 13px;
    }
  }
  .LogoHolder {
    width: 30%;
    .Logo,
    .Email {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .Logo {
      background-image: url(${LogoBG.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 20px 50px 16px 40px;
      margin-bottom: 18px;
    }
    .Email {
      border-radius: 37px;
      background: #6fcacc;
      padding: 0 14px 4px 38px;
    }
  }
  .Add {
    width: 30%;
    border-radius: 37px;
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
  /* justify-content: center; */
  margin-bottom: 80px;
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
    }
  }
  .Interface {
    background-image: url(${InterfaceBG.src});
    align-items: center;
    justify-content: end;
    h3 {
      margin-bottom: 0;
      margin-right: 45px;
    }
  }
`;
export const Help = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    text-align: start;
    line-height: 60px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 24px;
    color: #434956;
    font-weight: 600;
    line-height: 40px;
  }
  .ColHolder {
    max-width: 1033px;
    display: flex;
    /* border: 4px solid; */
    /* border-image: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%) 1; */
    /* border-radius: 7px; */
    .Col {
      width: 25%;
      border: 4px solid;
      border-image: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%) 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 -2px;
      padding: 40px 29px;
      /* &:nth-last-child(1) {
        border-right: 0;
      } */
    }
  }
`;
export const Quote = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  h3 {
    font-size: 26px;
    color: #434956;
    font-weight: 400;
    text-align: start;
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
    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
    }
  }
  .QuoteHolder,
  .Quote {
    max-width: 1033px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .Quote {
      width: 50%;
      justify-content: start;
      gap: 20px;
      margin-bottom: 32px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
`;
