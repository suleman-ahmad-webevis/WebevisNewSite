import styled from "styled-components";
export const HeroHolder = styled.section`
  padding: 70px 0;
  background-color: #211d1a;
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  color: #fff;
  .Content {
    max-width: 438px;
    h1 {
      font-size: 70px;
      line-height: 75px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    p {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 40px;
      max-width: 410px;
    }
  }
  .img-holder {
    max-width: 963px;
    margin-bottom: -70px;
    /* margin-left: -48px; */
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
