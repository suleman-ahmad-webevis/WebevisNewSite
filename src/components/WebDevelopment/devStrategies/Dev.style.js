import styled from "styled-components";

export const DevSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
  .adding_text {
    width: 83%;
    h2 {
      color: #434956;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 30px;
    }
    p {
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 50px;
    }
  }
`;
export const DevText = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 102px;
  row-gap: 80px;
  width: 85%;
  margin: auto;
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
    margin-bottom: 20px;
  }
  .dev_card {
    h3 {
      color: #434956;

      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
    }
    p {
      color: #434956;

      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;
