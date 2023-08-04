import styled from "styled-components";
export const PlatformHolder = styled.section`
  padding: 100px 0;
`;
export const Platform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    color: #434956;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
  }
  /* .img-holder {
    max-width: 202px;
    img {
      max-width: 100%;
      height: auto;
    }
  } */
  img {
    margin: 0 auto;
  }
  .slick-slider {
    max-width: 1920px;
  }
  /* .slick-slide {
    width: 40%;
  } */
`;
