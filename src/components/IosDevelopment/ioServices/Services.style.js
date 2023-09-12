import styled from "styled-components";
import radius from "../../../assets/images/Services/WebDevelopmentServices/radius.png";
import bgOne from "../../../../public/assets/images/IosDevelopment/bg1.png";
import responsive from "../../../../public/assets/images/IosDevelopment/responsive.png";
export const ServiceSec = styled.div`
  margin: 70px 0;
  background-image: url(${bgOne.src});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom center;
  @media screen and (max-width: 574px) {
    background-image: url(${responsive.src});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom  center;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    gap: 50px;
  }
  @media screen and (max-width: 1234px) {
    br {
      display: none;
    }
  }
  .text {
    .heading2 {
      color: #434956;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: normal;
      @media screen and (max-width: 1023px) {
        font-size: 35px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
    h4 {
      max-width: 1028px;
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      text-transform: capitalize;
      @media screen and (max-width: 1023px) {
        font-size: 24px;
      }
      @media screen and (max-width: 574px) {
        font-size: 18px;
      }
    }
  }

  .main_card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;

    column-gap: 30px;
    row-gap: 20px;
    .service_image {
    }
    @media screen and (max-width: 1100px) {
      column-gap: 17px;
      row-gap: 15px;
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      width: 80%;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
    }
  }
  .card {
    background: #fff;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: column;
    @media screen and (max-width: 574px) {
      padding-right: 10px;
    }
    margin: 0;
    h3 {
      color: #434956;
      padding-top: 20px;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1100px) {
        font-size: 22px;
      }
      @media screen and (max-width: 574px) {
        font-size: 24px;
      }
    }
    p {
      color: #434956;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin-top: 25px;
      padding: 0 20px;
      margin-bottom: 30px;
      line-height: 150%; /* 27px */
      @media screen and (max-width: 1100px) {
        font-size: 16px;
      }
      @media screen and (max-width: 574px) {
        font-size: 16px;
        padding: 0 5px 0 20px;
      }
    }
  }
  .inside_div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
  .image {
    background-image: url(${radius.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    padding: 20px 31px 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
      display: block;
      object-fit: contain;
    }
  }
`;
