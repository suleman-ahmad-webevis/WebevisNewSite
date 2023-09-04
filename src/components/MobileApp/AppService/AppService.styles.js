import styled from "styled-components";
export const ServiceHolder = styled.section`
  padding: 100px 0 50px 0;
`;
export const Service = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    color: #434956;
    font-size: 45px;
    line-height: 50px;
    font-weight: 700;
  }
  p {
    max-width: 650px;
    color: #434956;
    font-size: 24px;
    line-height: 34px;
    font-weight: 500;
  }
`;
export const WebCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 1204px) {
    justify-content: center;
  }
  .card {
    width: 315px;
    border-radius: 9px;
    border: 2px solid #eaeaea;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
    padding: 50px 30px 40px;
    /* flex-basis: 25%; */
    @media screen and (max-width: 1204px) {
      flex-basis: 28%;
    }
    @media screen and (max-width: 991px) {
      flex-basis: 46%;
    }
    @media screen and (max-width: 574px) {
      flex-basis: 100%;
    }
    h3 {
      color: #434956;
      font-size: 35px;
      font-style: normal;
      max-width: 214px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 20px;
      height: 90px;
      @media screen and (max-width: 1204px) {
        font-size: 30px;
      }
    }
    p {
      color: #434956;
      max-width: 220px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 50px;
      @media screen and (max-width: 1204px) {
        font-size: 16px;
      }
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
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
        brightness(102%) contrast(102%);
      cursor: pointer;
    }
  }
`;
