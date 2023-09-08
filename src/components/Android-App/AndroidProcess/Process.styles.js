import styled, { css } from "styled-components";
import ColBefore from "../../../../public/assets/images/Android-App/Process-before.png";
export const ProcessHolder = styled.section`
  padding: 50px 0;
`;
export const ProcessContent = styled.div`
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    font-style: normal;
    max-width: 1220px;
    margin: 0 auto;
  }
  h3 {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .Col-holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 105px;
    padding-top: 60px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 55%;
      left: 0;
      right: 0;
      height: 5px;
      background-color: #28b781;
      border-radius: 65px;
      z-index: -1;
    }
  }
`;
export const Col = styled.div`
  max-width: 450px;
  padding: 20px 28px 38px 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  background-color: #fff;
  /* z-index: 1; */
  ${(props) =>
    props.addBefore == true &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 46%;
        top: 213px;
        width: 20px;
        height: 113px;
        background-image: url(${ColBefore.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
    `}
  ul {
    color: #898989;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    padding-left: 20px;

    li {
      margin-bottom: 15px;
      position: relative;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        top: 4px;
        left: -23px;
        width: 14px;
        height: 14px;
        background: #d1d3d4;
        border-radius: 100%;
      }
    }
  }
`;
