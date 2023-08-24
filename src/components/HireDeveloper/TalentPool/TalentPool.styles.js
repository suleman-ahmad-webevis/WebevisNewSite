import styled from "styled-components";
export const Talent = styled.section`
  padding-bottom: 130px;
`;
export const Pool = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Slider = styled.section`
  width: 72.5%;
  @media screen and (max-width: 1200px) {
    width: 68%;
  }
  @media screen and (max-width: 992px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  width: 25%;
  @media screen and (max-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-width: 992px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    width: 100%;
  }
  h2 {
    color: #434956;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  ul {
    width: 78%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    li {
      color: #434956;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding-bottom: 20px;
      padding-left: 10px;
    }
    li::marker {
      content: ".";
      font-size: 50px;
      line-height: 0;
      color: #28b781;
    }
  }
`;
