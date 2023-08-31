import styled from "styled-components";
export const Cardwrapper = styled.div`
  width: 100%;
  margin: 0 auto 20px auto;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
  @media screen and (max-width: 540px) {
    gap: 30px;
    margin: 0 auto 10px auto;
    justify-content: space-between;
  }
`;
export const Iconbox = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  background: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 5;
  flex-shrink: 0;
  @media screen and (max-width: 1440px) {
    width: calc(50px + (80 - 50) * (100vw - 390px) / (1440 - 390));
    height: calc(50px + (80 - 50) * (100vw - 390px) / (1440 - 390));
  }
  img {
    width: 30px;
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 540px) {
      width: 20px;
    }
  }
`;

export const Card = styled.div`
  width: 270px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  overflow: hidden;
  @media screen and (max-width: 1400px) {
    width: 48%;
  }
  @media screen and (max-width: 540px) {
    width: 45%;
  }
  .hover-Wrapper {
    width: 70px;
    height: 70px;
    background-color: #28b781;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 5;
    flex-shrink: 0;
    @media screen and (max-width: 1440px) {
      width: calc(40px + (70 - 40) * (100vw - 390px) / (1440 - 390));
      height: calc(40px + (70 - 40) * (100vw - 390px) / (1440 - 390));
    }
  }

  &:hover {
    .hover-Wrapper {
      background: #fff;
    }
    img {
      transition: all 0.5s ease-in-out;
      filter: invert(57%) sepia(61%) saturate(618%) hue-rotate(106deg)
        brightness(97%) contrast(69%);
    }
    background: #28b781;
    .header {
      ::after {
        background: linear-gradient(
          113deg,
          #f6f3f3 0%,
          rgba(246, 243, 243, 0) 100%
        );
      }
    }
    ${Iconbox} {
      background: rgba(255, 255, 255, 0.3);
    }
    .text-holder {
      .title {
        color: #fff;
        button {
          background: #fff;
          @media screen and (max-width: 576px) {
            border-radius: 6px;
          }
        }
      }
      .view-more {
        background-color: #fff;
      }
    }
  }

  .header {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 22px;
      left: -20px;
      right: -20px;
      height: 27px;
      background-color: #f6f3f3;
      @media screen and (max-width: 540px) {
        top: 9px;
      }
    }
  }
  .text-holder {
    max-width: 200px;
    .title {
      width: 100%;
      display: block;
      color: #434956;
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: normal;
      }
    }
    .view-more {
      display: inline-flex;
      padding: 10px;
      font-size: 18px;
      line-height: 22px;
      text-transform: capitalize;
      border-radius: 11px;
      background: #eaf7ee;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.13);
    }
    .btn {
      font-size: 16px;
      @media screen and (max-width: 540px) {
        font-size: 12px;
        padding: 0;
      }
    }
  }
`;





