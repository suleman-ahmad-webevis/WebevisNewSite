import styled, { css } from "styled-components";
export const CardHolder = styled.div`
  text-align: center;
  .header {
    margin-bottom: 50px;
    h1 {
      font-size: 45px;
      font-weight: 600;
      line-height: 50px;
      color: var(--secondary, #434956);
      @media screen and (max-width: 1500px) {
        font-size: 35px;
        line-height: 40px;
      }
      @media screen and (max-width: 992px) {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
  .Card-parent {
    max-width: 1420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 100px;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      z-index: -10;
      top: 11%;
      position: absolute;
      width: 1200.623px;
      right: 0;
      bottom: 300px;
      border-radius: 0px 208px 208px 0px;
      border-top: 2px dashed #28b781;
      border-right: 2px dashed #28b781;
      border-bottom: 2px dashed #28b781;
    }
    @media screen and (max-width: 1500px) {
      padding: 10px;
    }
    @media screen and (max-width: 1190px) {
      &::before {
        display: none;
      }
    }
  }
`;

export const Card = styled.div`
  @media screen and (max-width: 1500px) {
    padding: 10px;
  }
`;
export const Approach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 350px;
  margin-bottom: 50px;

  .imagewrapper {
    position: relative;

    filter: drop-shadow(0px 1px 11px rgba(0, 0, 0, 0.1));
    border-radius: 50%;
    background-color: #fff;
    width: 145px;
    height: 145px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 809px) {
      width: 70px;
      height: 70px;
      ${(props) =>
        props.addBefore &&
        css`
          &:before {
            z-index: -1;
            content: "";
            position: absolute;
            height: 100px;
            width: 2px;
            border: 2px solid #28b781;
          }
        `}
      img {
        width: 36.207px;
        height: auto;
      }
    }
  }

  .title-holder {
    display: flex;
    justify-content: start;

    h2 {
      margin-bottom: 20px;
    }
  }
  .text-holder {
    text-align: left;
    p {
      @media screen and (max-width: 992px) {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 809px) {
    align-items: center;
  }
`;
