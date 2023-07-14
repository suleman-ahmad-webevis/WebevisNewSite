import styled from "styled-components";

export const StyledVision = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 100px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  @media screen and (max-width: 992px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 625px) {
    padding: 60px 0px;
  }
`;

export const VisionImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
`;

export const VisionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  gap: 30px;
  @media screen and (max-width: 992px) {
    gap: 20px;
  }
  h2 {
    color: #434956;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
