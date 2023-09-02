import styled from "styled-components";
import subtract from "../../../../public/assets/images/ECommerencePage/subtract.png";
export const ComSec = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  h2 {
    color: #424954;
    text-align: center;

    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
  }
`;
export const ComMain = styled.div`
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    flex-basis: 35%;
    .heading {
      background-image: url(${subtract.src});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 450px;
      height: 56.506px;
      margin-top: 50px;
      margin-bottom: 30px;
      h3 {
        color: #434956;
        font-size: 26px;
        text-align: center;

        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
      }
    }
    ul {
      padding-left: 40px;
      li {
        span {
          color: #434956;
          font-size: 24px;
          display: inline-block;
          font-style: normal;
          max-width: 373px;
          font-weight: 400;
          line-height: 150%; /* 36px */
        }
        ::before {
          /* content: "sass"; */
          
        }
      }
    }
  }
`;
