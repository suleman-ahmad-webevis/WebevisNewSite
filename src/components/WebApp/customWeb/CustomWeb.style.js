import styled from "styled-components";
import polygon from "../../../../public/assets/images/webApp/polygon.png";
export const CustomSec = styled.div`
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
    width: 70%;
    margin: auto;
    margin-bottom: 40px;

  }

  .main_div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 100px;
    .custom {
      display: flex;
      flex-direction: column;
      .polygon {
        /* background-image: url(${polygon.src});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center; */
      }
      h3 {
        color: #434956;
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
        line-height: 150%; /* 27px */
      }
    }
  }
`;
