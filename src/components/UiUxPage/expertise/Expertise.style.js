import styled from "styled-components";

export const ExpertiseSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 70px;
  }
  p {
    color: #434956;
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
  }
  .main_expert {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .expert {
      display: flex;
      flex-direction: column;
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
      }
      h3 {
        color: #434956;
        text-align: center;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 67.5px */
        margin-bottom: 20px;
      }
      h4 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 42px */
      }
    }
  }
`;
