import styled, { css } from "styled-components";
export const Col = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 360px;
  background: linear-gradient(
    182.26deg,
    rgba(43, 44, 47, 0) 63.38%,
    rgba(43, 44, 47, 0.92) 78.22%
  );
  width: 25%;
  padding: 0 10px 20px 15px;
  transition: 0.7s;
  overflow: hidden;
  border-right: 1px solid #999a9a;
  @media screen and (min-width: 992px){
    height: 420px;
    padding: 0 15px 30px 30px;
  }
  @media screen and (min-width: 1400px) {
    height: 550px;
  }
  /* &:hover {
    background: rgb(43, 44, 47, 0.63);
    background-color: red !important;
    .Content {
      visibility: visible;

      opacity: 1;
      transform: translateY(-0px);
    }
    h1 {
      transform: translateY(0);
    }
    h2 {
      transform: translateY(0);
    }
  } */
  .Content {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in;
    padding-bottom: 30px;
    transform: translateY(270px);
    p {
      font-size: 16px;
      @media screen and (min-width: 992px){
        font-size: 20px;
      }
    }
    h3 {
      font-size: 20px;
      @media screen and (min-width: 992px){
        font-size: 25px;
        font-weight: 600;
      }
    }
  }
  h1 {
    font-size: 50px;
    color: #28b781;
    transition: 0.3s ease-in;
    transform: translateY(220px);
    margin: 0;
    cursor: pointer;
    @media screen and (min-width: 992px){
      transform: translateY(260px);
      font-size: 64px;
    }
  }
  h2 {
    font-size: 25px;
    width: 140px;
    transition: 0.3s ease-in;
    transform: translateY(220px);
    cursor: pointer;
    @media screen and (min-width: 992px){
      transform: translateY(260px);
      font-size: 32px;
    }
  }
  &.hovered {
    background: rgb(43, 44, 47, 0.63);
    /* background-color: red !important; */
    .Content {
      visibility: visible;

      opacity: 1;
      transform: translateY(-0px);
    }
    h1 {
      transform: translateY(0);
    }
    h2 {
      transform: translateY(0);
    }
  }
`;
