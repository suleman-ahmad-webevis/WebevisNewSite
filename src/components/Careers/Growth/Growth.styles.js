import styled from "styled-components";
export const GrowthHolder = styled.section`
  padding: 100px 0;
`;
export const TitleHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Growth {
    max-width: 666px;
    h2 {
      color: #434956;
      font-size: 45px;
      font-weight: 700;
      line-height: 50px;
      margin-bottom: 20px;
    }
    p {
      color: #434956;
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
  .image-holder {
    max-width: 722px;
    img {
      width: 100;
      height: auto;
      display: block;
    }
  }
`;
