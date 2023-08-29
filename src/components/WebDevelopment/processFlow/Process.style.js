import styled from "styled-components";
import radius from "../../../assets/images/Services/WebDevelopmentServices/radius.png";
export const ProcessSec = styled.div`
  width: 95%;
  margin: auto;
  margin: 70px 0;
  .heading2 {
    color: #434956;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 50px;
    line-height: normal;
  }
  .main_card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 20px;
    width: 95%;
    margin: auto;
  }
  .card {
    background: #fff;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    margin: 0;
    h3 {
      color: #434956;
      padding-top: 35px;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 42px */
    }
    p {
      color: #434956;

      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin-top: 25px;
      padding-left: 20px;
      margin-bottom: 30px;
      line-height: 150%; /* 27px */
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
  }
`;
