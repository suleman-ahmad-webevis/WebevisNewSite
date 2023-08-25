import styled from "styled-components";
export const RowFirst = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;
export const Row = styled.section`
  width: 88%;
  margin: auto;
  margin-bottom: 60px;
  h1 {
    color: #424954;
    leading-trim: both;
    text-edge: cap;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 30px;

    color: #2b2c2f;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const RowSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const RowImage = styled.section`
  text-align: center;
  width: 146px;
  height: 146px;
  background: #434956;
  border: 4px solid #ffffff;
  box-shadow: 0px 2px 12px -1px rgba(0, 0, 0, 0.25);
  object-fit: contain;
  border-radius: 100%;
  img {
    margin-top: 35px;
    width: 80.32px;
    height: 70.9px;
    object-fit: contain;
  }
`;
export const RowHeading = styled.section`
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #434956;
    margin: 20px 0 8px;
  }
  p {
    width: 264px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #434956;
    @media screen and (max-width: 658px) {
      margin-bottom: 15px;
    }
  }
`;
