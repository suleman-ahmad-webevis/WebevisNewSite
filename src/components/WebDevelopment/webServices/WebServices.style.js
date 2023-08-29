import styled from "styled-components";

export const WebSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0;
  .web_texting {
    width: 88%;
    margin: auto;
    h2 {
      color: #434956;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      margin-bottom: 30px;
    }
    p {
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
  }
`;
export const WebCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 50px;

  .card {
    border-radius: 9px;
    border: 2px solid #eaeaea;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
    padding: 50px 30px;
    width: 315px;
    h3 {
      color: #434956;
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 20px;
      height: 90px;
    }
    p {
      color: #434956;
      max-width: 220px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 50px;
    }
  }
  .card:hover {
    background: #28b781;
    h3 {
      color: white;
    }
    p {
      color: white;
    }
    img {
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(318deg)
        brightness(100%) contrast(100%);
    }
  }
`;
