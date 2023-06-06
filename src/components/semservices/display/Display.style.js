import styled from "styled-components";
export const RowFirst = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;
export const Row = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    text-align: center;
    margin: 0;

    color: #424954;
  }
  p {
    width: 1124px;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    /* margin: 0; */
    color: #2b2c2f;
  }
  @media screen and (max-width: 1169px) {
    p {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 658px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 19px;
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
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
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
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #434956;
  }
  p {
    width: 264px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #434956;
  }
`;
