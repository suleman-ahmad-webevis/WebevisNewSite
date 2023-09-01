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
      z-index: -1;
      top: 10%;
      position: absolute;
      width: 1200.623px;
      right: 0;
      bottom: 350px;
      border-radius: 0px 208px 208px 0px;
      border-top: 2px dashed #28b781;
      border-right: 2px dashed #28b781;
      border-bottom: 2px dashed #28b781;
    }
    @media screen and (max-width: 1500px) {
      padding: 10px;
    }
    @media screen and (max-width: 1129px) {
      &::before {
        display: none;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  background: #fff;
  position: relative;
  border-radius: 50%;
  width: 145px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

    img {
      width: 36.207px;
      height: auto;
    }
  }
  @media screen and (max-width: 769px) {
    ${(props) =>
      props.addBefore == true &&
      css`
        &::after {
          content: "";
          z-index: -1;
          position: absolute;
          top: -75%;
          height: 53px;
          border: 1px dashed #28b781;
        }
      `}
  }
`;

export const Approach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 350px;
  margin-bottom: 50px;
  gap: 10px;
  h2 {
    text-align: left;
    color: #434956;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    @media screen and (max-width: 769px) {
      /* text-align: center; */
    }
  }

  p {
    text-align: left;
    color: #434956;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 992px) {
      font-size: 16px;
    }
    @media screen and (max-width: 769px) {
      text-align: center;
    }
  }
  @media screen and (max-width: 769px) {
    align-items: center;
    justify-content: center;
  }
`;
