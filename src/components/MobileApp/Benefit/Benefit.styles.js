import styled from "styled-components";
export const BenefitHolder = styled.section`
  padding: 100px 0 50px 0;
`;
export const BenefitContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Content {
    max-width: 649px;
    h2 {
      color: #424954;
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    p {
      color: #434956;
      font-size: 28px;
      line-height: 35px;
      font-weight: 400;
    }
  }
  .image-holder {
    max-width: 614px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
