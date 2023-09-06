import styled from "styled-components";
import polygon from "../../../../public/assets/images/webApp/polygon.png";

export const ServiceSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  .heading {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
    
    margin-bottom: 40px;
    @media screen and (max-width: 1023px) {
      width: 100%;
      font-size: 38px;
      br{
        display: none;
      }
    }
    @media screen and (max-width: 991px) {
      font-size: 32px;
    }
    @media screen and (max-width: 574px) {
      font-size: 28px;
    }
  }

  .main_div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 100px;
    @media screen and (max-width: 1200px) {
      gap: 30px 70px;
    }
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }
    @media screen and (max-width: 574px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .polygon {
        width: 105px;
        height: 120px;
        background-image: url(${polygon.src});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    .custom {
      display: flex;
      flex-direction: column;
     
      h3 {
        color: #434956;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1200px) {
          font-size: 25px;
        }
        @media screen and (max-width: 767px) {
          font-size: 24px;
        }
      }
      p {
        color: #434956;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
      }
    }
  }
`;
