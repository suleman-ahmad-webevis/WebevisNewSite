import styled from "styled-components";
export const QualityHolder = styled.section`
  padding-top: 150px;
`;
export const QualityContent = styled.div`
  p,
  li {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(35px + (50 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }
  ul {
    padding-left: 40px;
    @media screen and (max-width: 1440px) {
      padding-left: calc(30px + (40 - 30) * (100vw - 390px) / (1440 - 390));
    }
    li {
      margin-bottom: 20px;
      list-style-type: disc;
    }
  }
`;
