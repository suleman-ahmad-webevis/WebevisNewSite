import styled from "styled-components";
import html from "../../../../public/assets/images/uiPage/html.png";
export const HtmlSec = styled.div`
  background-image: url(${html.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap:40px;
  margin: 50px 0;
  /* background: #eaf7ee; */
 .container{
  
 }
  .text {

    margin-top: 30px;
    h3 {
      color: #2b2c2f;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 30px;
    }
    p {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      margin-bottom: 30px;
    }
  }
  .parent{
    display: flex;
    gap: 20px;
  padding: 16px 0;
  }
  .card {
    border-radius: 67px;
    background: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 314px;
height: 429px;
    /* padding: 20px 24px 50px; */
    h5 {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 150%; /* 42px */
    }
    h4 {
      color: #434956;
      margin-bottom: 20px;


text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
  }
  .card1 {
    border-radius: 67px;
    background: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 20px 84px 79px; */
    width: 314px;
height: 429px;
    h5 {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 150%; /* 42px */
    }
    h4 {
      color: #434956;
      margin-bottom: 20px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
  }
`;
