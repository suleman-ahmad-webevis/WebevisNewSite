import styled from "styled-components";
import html from "../../../../public/assets/images/uiPage/html.png";
export const HtmlSec = styled.div`
  background-image: url(${html.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: #eaf7ee;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  .text {
    display: flex;
    flex-direction: column;
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
  .card {
    border-radius: 67px;
    background: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
  }
`;
