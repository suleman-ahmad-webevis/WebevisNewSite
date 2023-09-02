import styled from "styled-components";

export const ResSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .main_res {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    h2 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: uppercase;
    }
    .circle {
      fill: #fff;
      background-color: white;
      filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin-bottom: 30px;
      h5 {
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
        text-transform: lowercase;
        background: var(
          --Linear,
          linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .res {
      display: flex;
      gap: 31px;
      margin-bottom: 100px;
    }
    .text {
      display: flex;
      flex-direction: column;
      h3 {
        color: #434956;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
        text-transform: capitalize;
      }
      h4 {
        color: #434956;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
      }
    }
  }
  .res_image {
    flex-basis: 50%;
  }
`;
