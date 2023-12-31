import styled from "styled-components";

export const StyledChoose = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 49px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    margin: 0 auto;
  }
  @media screen and (max-width: 624px) {
    padding: 30px 10px;
  }
`;
export const ChooseWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    br {
      display: none;
    }
  }
  @media screen and (max-width: 624px) {
    padding: 0px 10px;
  }
`;
export const ChooseSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  h3 {
    color: #434956;
    leading-trim: both;
    text-edge: cap;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ChooseSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  /* img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  } */
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .imgResp {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .imgResp {
      display: block;
    }
    .imgDesk {
      display: none;
    }
  }
  @media screen and (max-width: 1224px) {
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
